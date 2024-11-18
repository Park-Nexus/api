import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { procedure } from "../../trpc";

// Get daily revenue --------------------------------------------------------------------------
export const getDailyRevenue = procedure.use(authMiddleware(["ADMIN"])).query(async () => {
  const paymentRecords = await prisma.paymentRecord.findMany({
    where: {
      status: "PAID",
    },
    select: {
      amountInUsd: true,
      createdAt: true,
    },
  });

  // Aggregate revenue by day
  const dailyRevenue = paymentRecords.reduce(
    (acc, record) => {
      const day = record.createdAt.toISOString().split("T")[0]; // Extract the date (YYYY-MM-DD)
      if (!acc[day]) {
        acc[day] = 0;
      }
      acc[day] += record.amountInUsd;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Transform the aggregated object into an array of { date, revenueInUsd }
  const result = Object.entries(dailyRevenue).map(([date, revenueInUsd]) => ({
    date,
    revenueInUsd,
  }));

  // Sort the result by date in ascending order
  return result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
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
        select: { reservations: { select: { paymentRecord: { select: { amountInUsd: true } } } } },
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
    const weekDayUtilization = parkingSpots.reduce(
      (acc, spot) => {
        spot.reservations.forEach((reservation) => {
          const { startTime, endTime } = reservation;
          const startDay = new Date(startTime).getDay();
          const endDay = new Date(endTime).getDay();
          for (let i = startDay; i <= endDay; i++) {
            if (!acc[i]) {
              acc[i] = 0;
            }
            acc[i]++;
          }
        });
        return acc;
      },
      {} as Record<number, number>,
    );

    // Transform the aggregated object into an array of { weekDay, utilization }
    const result = Object.entries(weekDayUtilization).map(([day, utilization]) => ({
      weekDay: Number(day),
      utilization,
    }));

    // Sort the result by week day in ascending order
    return result.sort((a, b) => a.weekDay - b.weekDay);
  });
