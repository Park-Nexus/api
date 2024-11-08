import { z } from "zod";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { procedure } from "../../trpc";
import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { TRPCError } from "@trpc/server";

// Create a new ticket ------------------------------------------------------------------------------
const createSchema = z.object({
  parkingLotId: z.number(),
  serviceIds: z.array(z.number()),
  vehicleId: z.number(),
  dateTime: z.string(),
});
export const create = procedure
  .use(authMiddleware(["USER"]))
  .input(createSchema)
  .mutation(async ({ ctx, input }) => {
    const { dateTime, parkingLotId, serviceIds, vehicleId } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    // check if date time is in the future
    const now = dayjs();
    const dateTimeObj = dayjs(dateTime);
    if (dateTimeObj.isBefore(now)) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Date time must be in the future" });
    }

    const parkingLot = await prisma.parkingLot.findUnique({ where: { id: parkingLotId } });
    if (!parkingLot) throw new TRPCError({ code: "NOT_FOUND", message: "Parking lot not found" });
    if (parkingLot.ownerId === user.id) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You cannot reserve your own parking lot",
      });
    }

    const services = await prisma.parkingLotService.findMany({
      where: { parkingLotId, id: { in: serviceIds } },
    });
    if (services.length !== serviceIds.length) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "One or more services not found",
      });
    }

    const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
    if (!vehicle) throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" });
    if (vehicle.ownerId !== user.id) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Vehicle not owned by user" });
    }

    const availableParkingSpot = await prisma.parkingSpot.findFirst({
      where: {
        parkingLotId,
        vehicleType: vehicle.type,
      },
    });
    if (!availableParkingSpot) {
      throw new TRPCError({ code: "BAD_REQUEST", message: "No available parking spot" });
    }

    const newTicketCode = uuid();
  });
