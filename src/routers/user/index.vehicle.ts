import { z } from "zod";

import { authMiddleware } from "../../auth";
import { prisma, Vehicle, VEHICLE__TYPE_ALIAS } from "../../db";
import { procedure } from "../../trpc";
import { TRPCError } from "@trpc/server";

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

    return vehicles;
  });
