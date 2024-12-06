import { z } from "zod";

import { authMiddleware } from "../../auth";
import { prisma, Vehicle, VEHICLE__TYPE_ALIAS } from "../../db";
import { procedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
import { deleteFile, getFileSignedUrl } from "../../utils/storage";

// Add a new vehicle ------------------------------------------------------------------------
const addSchema = z.object({
  type: z.nativeEnum(VEHICLE__TYPE_ALIAS),
  plate: z.string(),
  brand: z.string(),
  model: z.string(),
  color: z.string(),
  imageUrl: z.string().optional(),
});
export const add = procedure
  .use(authMiddleware(["USER"]))
  .input(addSchema)
  .mutation(async ({ input, ctx }) => {
    const { type, plate, brand, model, color, imageUrl } = input;
    const {
      account: { id },
    } = ctx;

    const { id: ownerId } = await prisma.user.findUnique({ where: { accountId: id } });

    const existingVehicles = await prisma.vehicle.findMany({ where: { plate, ownerId } });
    if (existingVehicles.length > 0) {
      throw new TRPCError({ code: "CONFLICT", message: "Vehicle already exists" });
    }

    await prisma.vehicle.create({
      data: {
        type,
        plate,
        brand,
        model,
        color,
        imageUrl,
        ownerId,
      },
    });
  });

// Update a vehicle ------------------------------------------------------------------------
const updateSchema = z.object({
  id: z.number(),
  plate: z.string().optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  color: z.string().optional(),
  imageUrl: z.string().optional(),
});
export const update = procedure
  .use(authMiddleware(["USER"]))
  .input(updateSchema)
  .mutation(async ({ input, ctx }) => {
    const { id, plate, brand, model, color, imageUrl } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    const vehicle = await prisma.vehicle.findUnique({ where: { id, ownerId: user.id } });
    if (!vehicle) throw new TRPCError({ code: "NOT_FOUND", message: "Vehicle not found" });

    if (imageUrl && vehicle.imageUrl) await deleteFile({ path: vehicle.imageUrl });

    await prisma.vehicle.update({
      where: { id },
      data: {
        plate,
        brand,
        model,
        color,
        imageUrl,
      },
    });
  });

// Get many vehicles -----------------------------------------------------------------------
const getManySchema = z.object({
  userId: z.number().optional(),

  availabilityStart: z.string().optional(),
  availabilityEnd: z.string().optional(),
});
export const getMany = procedure
  .use(authMiddleware(["USER", "ADMIN"]))
  .input(getManySchema)
  .query(async ({ input, ctx }) => {
    const { userId, availabilityStart, availabilityEnd } = input;
    const {
      account: { role },
    } = ctx;

    if (role !== "ADMIN" && userId) throw new TRPCError({ code: "FORBIDDEN" });

    let vehicles: (Vehicle & { isReserved?: boolean })[];

    if (userId) {
      vehicles = await prisma.vehicle.findMany({ where: { ownerId: userId } });
    } else {
      const { id: ownerId } = await prisma.user.findUnique({
        where: { accountId: ctx.account.id },
      });
      vehicles = await prisma.vehicle.findMany({ where: { ownerId } });
    }

    vehicles = await Promise.all(
      vehicles.map(async (vehicle) => {
        if (!vehicle.imageUrl) return vehicle;
        return {
          ...vehicle,
          imageUrl: await getFileSignedUrl({ path: vehicle.imageUrl }),
        };
      }),
    );

    if (availabilityStart && availabilityEnd) {
      vehicles = await Promise.all(
        vehicles.map(async (vehicle) => {
          const reservation = await prisma.reservation.findFirst({
            where: {
              vehicleId: vehicle.id,
              status: { in: ["PENDING", "ON_GOING"] },
              OR: [
                {
                  // start before, end after
                  AND: [
                    { startTime: { lte: new Date(availabilityStart) } },
                    { endTime: { gte: new Date(availabilityStart) } },
                  ],
                },
                {
                  // start in between
                  AND: [
                    { startTime: { lte: new Date(availabilityEnd) } },
                    { startTime: { gte: new Date(availabilityStart) } },
                  ],
                },
                {
                  // end in between
                  AND: [
                    { endTime: { gte: new Date(availabilityStart) } },
                    { endTime: { lte: new Date(availabilityEnd) } },
                  ],
                },
                {
                  // start after, end before
                  AND: [
                    { startTime: { gte: new Date(input.availabilityStart) } },
                    { endTime: { lte: new Date(input.availabilityEnd) } },
                  ],
                },
              ],
            },
          });

          return { ...vehicle, isReserved: !!reservation };
        }),
      );
    }

    return vehicles;
  });
