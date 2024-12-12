import dayjs from "dayjs";
import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { procedure } from "../../trpc";
import { reverseGeocode } from "../../utils/location";

// Get daily revenue --------------------------------------------------------------------------
export const getDailyRevenue = procedure.use(authMiddleware(["ADMIN"])).query(async () => {
  const paymentRecords = await prisma.paymentRecord.findMany({
    where: {
      status: "PAID",
    },
    select: {
      reservation: { select: { parkingSpot: { select: { vehicleType: true } } } },
      amountInUsd: true,
      createdAt: true,
    },
  });

  // Aggregate revenue by day, split by vehicle type
  const dailyRevenue = paymentRecords.reduce(
    (acc, record) => {
      const day = dayjs(record.createdAt).format("YYYY-MM-DD");
      if (!acc[day]) {
        acc[day] = { total: 0, byVehicleType: {} as Record<string, number> };
      }
      acc[day].total += record.amountInUsd;
      if (!acc[day].byVehicleType[record.reservation.parkingSpot.vehicleType]) {
        acc[day].byVehicleType[record.reservation.parkingSpot.vehicleType] = 0;
      }
      acc[day].byVehicleType[record.reservation.parkingSpot.vehicleType] += record.amountInUsd;
      return acc;
    },
    {} as Record<string, { total: number; byVehicleType: Record<string, number> }>,
  );

  // Transform the aggregated object into an array of { day, totalRevenue, revenueByVehicleType }
  const result = Object.entries(dailyRevenue).map(([day, { total, byVehicleType }]) => ({
    day,
    totalRevenue: total,
    revenueByVehicleType: Object.entries(byVehicleType).map(([vehicleType, revenue]) => ({
      vehicleType,
      revenue,
    })),
  }));

  // Sort the result by day in ascending order
  return result.sort((a, b) => dayjs(a.day).unix() - dayjs(b.day).unix());
});

// Get data by place --------------------------------------------------------------------------------
export const getDataByPlace = procedure.use(authMiddleware(["ADMIN"])).query(async () => {
  const parkingLots = await prisma.parkingLot.findMany({
    select: {
      id: true,
      name: true,
      latitude: true,
      longitude: true,
      parkingSpots: {
        where: { deletedAt: null },
        select: {
          vehicleType: true,
          reservations: {
            select: {
              paymentRecord: { select: { amountInUsd: true, status: true } },
            },
          },
        },
      },
    },
  });

  const result: {
    placeCode: string;

    placeName: string;
    revenueInUsd: number;
    numberOfParkingLot: number;
    numberOfCarSpots: number;
    numberOfMotorcycleSpots: number;
    numberOfTruckSpots: number;
  }[] = [];

  // Aggregate revenue by place
  await Promise.all(
    parkingLots.map(async (lot) => {
      const feature = await reverseGeocode({ lat: lot.latitude, lon: lot.longitude });

      const placeCode = feature?.properties?.context?.place?.short_code || "Other";
      if (!placeCode) return;
      const placeName = feature?.properties?.context?.place?.name || "Other";
      const revenueInUsd = lot.parkingSpots.reduce((acc, spot) => {
        return (
          acc +
          spot.reservations
            .filter((rev) => rev.paymentRecord.status === "PAID")
            .reduce((acc, reservation) => {
              if (reservation.paymentRecord) {
                return acc + reservation.paymentRecord.amountInUsd;
              }
              return acc;
            }, 0)
        );
      }, 0);
      const numberOfCarSpots = lot.parkingSpots.filter((spot) => spot.vehicleType === "CAR").length;
      const numberOfMotorcycleSpots = lot.parkingSpots.filter(
        (spot) => spot.vehicleType === "MOTORCYCLE",
      ).length;
      const numberOfTruckSpots = lot.parkingSpots.filter(
        (spot) => spot.vehicleType === "TRUCK",
      ).length;

      const currentIndex = result.find((item) => item.placeName === placeName);

      if (currentIndex) {
        currentIndex.revenueInUsd += revenueInUsd;
        currentIndex.numberOfParkingLot += 1;
        currentIndex.numberOfCarSpots += numberOfCarSpots;
        currentIndex.numberOfMotorcycleSpots += numberOfMotorcycleSpots;
        currentIndex.numberOfTruckSpots += numberOfTruckSpots;
        return;
      }

      result.push({
        placeCode,
        placeName,
        revenueInUsd,
        numberOfParkingLot: 1,
        numberOfCarSpots,
        numberOfMotorcycleSpots,
        numberOfTruckSpots,
      });
    }),
  );

  return result;
});

// Get top parking lots by revenue ------------------------------------------------------------------------
export const topParkingLotsByRevenue = procedure.use(authMiddleware(["ADMIN"])).query(async () => {
  const parkingLots = await prisma.parkingLot.findMany({
    select: {
      id: true,
      name: true,
      phone: true,
      owner: { select: { account: { select: { email: true } } } },
      parkingSpots: {
        select: {
          reservations: {
            select: {
              paymentRecord: { where: { status: "PAID" }, select: { amountInUsd: true } },
            },
          },
        },
      },
    },
  });

  // Aggregate revenue by parking lot
  const parkingLotRevenue = parkingLots.map((lot) => {
    const revenue = lot.parkingSpots.reduce((acc, spot) => {
      const spotRevenue = spot.reservations.reduce((acc, reservation) => {
        if (reservation.paymentRecord) {
          return acc + reservation.paymentRecord.amountInUsd;
        }
        return acc;
      }, 0);
      return acc + spotRevenue;
    }, 0);
    return {
      parkingLot: lot,
      revenueInUsd: revenue,
    };
  });

  // Sort the result by revenue in descending order
  return parkingLotRevenue.sort((a, b) => b.revenueInUsd - a.revenueInUsd);
});

// Get revenue Contribution by Vehicle Type ------------------------------------------------------------------------
export const revenueContributionByVehicleType = procedure
  .use(authMiddleware(["ADMIN"]))
  .query(async () => {
    const parkingSpots = await prisma.parkingSpot.findMany({
      include: {
        reservations: {
          select: {
            vehicle: { select: { type: true } },
            paymentRecord: { select: { amountInUsd: true } },
          },
        },
      },
    });

    // Aggregate revenue by vehicle type
    const vehicleTypeRevenue = parkingSpots.reduce(
      (acc, spot) => {
        spot.reservations.forEach((reservation) => {
          const { vehicle, paymentRecord } = reservation;
          if (paymentRecord) {
            if (!acc[vehicle.type]) {
              acc[vehicle.type] = 0;
            }
            acc[vehicle.type] += paymentRecord.amountInUsd;
          }
        });
        return acc;
      },
      {} as Record<string, number>,
    );

    // Transform the aggregated object into an array of { vehicleType, revenueInUsd }
    const result = Object.entries(vehicleTypeRevenue).map(([type, revenueInUsd]) => ({
      vehicleType: type,
      revenueInUsd,
    }));

    // Sort the result by revenue in descending order
    return result.sort((a, b) => b.revenueInUsd - a.revenueInUsd);
  });

// Get Parking Spot Utilization by week day ------------------------------------------------------------------------
export const parkingSpotUtilizationByWeekDay = procedure
  .use(authMiddleware(["ADMIN"]))
  .query(async () => {
    const parkingSpots = await prisma.parkingSpot.findMany({
      include: {
        reservations: {
          select: {
            startTime: true,
            endTime: true,
          },
        },
      },
    });

    // Aggregate utilization by week day
    const utilizationByWeekDay = parkingSpots.reduce(
      (acc, spot) => {
        spot.reservations.forEach((reservation) => {
          const { startTime, endTime } = reservation;
          const startDay = dayjs(startTime).format("dddd");
          const endDay = dayjs(endTime).format("dddd");
          if (startDay === endDay) {
            if (!acc[startDay]) {
              acc[startDay] = 0;
            }
            acc[startDay] += 1;
          } else {
            if (!acc[startDay]) {
              acc[startDay] = 0;
            }
            if (!acc[endDay]) {
              acc[endDay] = 0;
            }
            acc[startDay] += 1;
            acc[endDay] += 1;
          }
        });
        return acc;
      },
      {} as Record<string, number>,
    );

    // Transform the aggregated object into an array of { weekDay, utilization }
    const result = Object.entries(utilizationByWeekDay).map(([weekDay, utilization]) => ({
      weekDay,
      utilization,
    }));

    // Sort the result by utilization in descending order
    return result.sort((a, b) => b.utilization - a.utilization);
  });
