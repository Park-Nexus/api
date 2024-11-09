import { z } from "zod";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { procedure } from "../../trpc";
import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { TRPCError } from "@trpc/server";
import cron from "node-cron";
import { DateUtils } from "../../utils/date";
import {
  EXPIRATION_TIME_IN_HOURS,
  MAX_AHEAD_TIME_ALLOWED_IN_HOURS,
  MAX_ALLOWED_RESERVATIONS,
  MINIMUM_BOOKING_DURATION_IN_HOURS,
} from "../../../rules";

// Create a new ticket ------------------------------------------------------------------------------
const createSchema = z.object({
  parkingLotId: z.number(),
  serviceIds: z.array(z.number()),
  vehicleId: z.number(),
  startTime: z.string(),
  endTime: z.string(),
});
export const create = procedure
  .use(authMiddleware(["USER"]))
  .input(createSchema)
  .mutation(async ({ ctx, input }) => {
    const { startTime, endTime, parkingLotId, serviceIds, vehicleId } = input;
    const {
      account: { id: accountId },
    } = ctx;

    // check if user exists
    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    // check if user has reached maximum allowed reservations
    const currentReservations = await prisma.reservation.findMany({
      where: { vehicle: { ownerId: user.id } },
    });
    if (currentReservations.length > MAX_ALLOWED_RESERVATIONS) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `You can only have ${MAX_ALLOWED_RESERVATIONS} reservations`,
      });
    }

    // check if date time is in the future, and less than 48 hours
    const now = dayjs();
    const startTimeObj = dayjs(startTime);
    const endTimeObj = dayjs(endTime);
    if (startTimeObj.isBefore(now)) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Start time must be in the future" });
    }
    if (startTimeObj.diff(now, "hours") > MAX_AHEAD_TIME_ALLOWED_IN_HOURS) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Start time must be less than ${MAX_AHEAD_TIME_ALLOWED_IN_HOURS} hours from now`,
      });
    }

    // check if parking lot exists, check if owned by user
    const parkingLot = await prisma.parkingLot.findUnique({ where: { id: parkingLotId } });
    if (!parkingLot) throw new TRPCError({ code: "NOT_FOUND", message: "Parking lot not found" });
    if (parkingLot.ownerId === user.id) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You cannot reserve your own parking lot",
      });
    }
    if (startTimeObj.diff(endTimeObj, "hours") < MINIMUM_BOOKING_DURATION_IN_HOURS) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Parking must be at least ${MINIMUM_BOOKING_DURATION_IN_HOURS} hours`,
      });
    }

    // check if services exist
    const services = await prisma.parkingLotService.findMany({
      where: { parkingLotId, id: { in: serviceIds } },
    });
    if (services.length !== serviceIds.length) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "One or more services not found",
      });
    }

    // find vehicle, check if owned by user
    const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
    if (!vehicle) throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" });
    if (vehicle.ownerId !== user.id) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Vehicle not owned by user" });
    }

    // check if parking spot is available
    const availableParkingSpot = await prisma.parkingSpot.findFirst({
      where: {
        parkingLotId,
        vehicleType: vehicle.type,
      },
    });
    if (!availableParkingSpot) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "No available parking spot" });
    }

    const newTicketCode = uuid(); // generate new ticket code
    const newReservation = await prisma.reservation.create({
      data: {
        code: newTicketCode,
        startTime: startTimeObj.toDate(),
        endTime: endTimeObj.toDate(),
        userId: user.id,
        parkingSpotId: availableParkingSpot.id,
        vehicleId: vehicle.id,
        services: {
          connect: services.map((service) => ({ id: service.id })),
        },
      },
    });

    const expiredAtObj = startTimeObj.add(EXPIRATION_TIME_IN_HOURS, "hours").toDate();
    const job = cron.schedule(DateUtils.toCronDate(expiredAtObj), async () => {
      const reservation = await prisma.reservation.findUnique({
        where: { id: newReservation.id },
      });

      if (reservation?.status === "PENDING") {
        await prisma.reservation.update({
          where: { id: newReservation.id },
          data: { status: "EXPIRED" },
        });
        console.log(`Reservation ${newReservation.id} expired`);
        // will setup notification here -------------------------------------------
      }

      job.stop();
    });
  });

// Get many tickets ---------------------------------------------------------------------------
const getManySchema = z.object({
  isMine: z.boolean().optional(),
  parkingLotId: z.number().optional(),
});
export const getMany = procedure
  .use(authMiddleware())
  .input(getManySchema)
  .query(async ({ input, ctx }) => {
    const { isMine, parkingLotId } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new Error("User not found");

    const reservations = await prisma.reservation.findMany({
      where: isMine
        ? { userId: user.id }
        : { parkingSpot: { parkingLot: { id: parkingLotId, ownerId: user.id } } },
    });

    return reservations;
  });

// Get single ticket ---------------------------------------------------------------------------
const getSingleSchema = z.object({
  id: z.number(),
});
export const getSingle = procedure
  .use(authMiddleware())
  .input(getSingleSchema)
  .query(async ({ input, ctx }) => {
    const { id } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new Error("User not found");

    const reservation = await prisma.reservation.findFirst({
      where: {
        OR: [
          { id, userId: user.id },
          { id, parkingSpot: { parkingLot: { ownerId: user.id } } },
        ],
      },
    });

    return reservation;
  });
