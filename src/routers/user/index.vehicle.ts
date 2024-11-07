import { z } from "zod";

import { authMiddleware } from "../../auth";
import { prisma, Vehicle, VEHICLE__TYPE_ALIAS } from "../../db";
import { procedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
import { deleteFile, getFileSignedUrl } from "../../storage";

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
  type: z.nativeEnum(VEHICLE__TYPE_ALIAS).optional(),
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
    const { id, type, plate, brand, model, color, imageUrl } = input;
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
        type,
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
});
export const getMany = procedure
  .use(authMiddleware(["USER", "ADMIN"]))
  .input(getManySchema)
  .query(async ({ input, ctx }) => {
    const { userId } = input;
    const {
      account: { role },
    } = ctx;

    if (role !== "ADMIN" && userId) throw new TRPCError({ code: "FORBIDDEN" });

    let vehicles: Vehicle[];

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

    return vehicles;
  });
