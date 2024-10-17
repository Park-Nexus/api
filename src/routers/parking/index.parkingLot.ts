import { z } from "zod";

import { authMiddleware } from "../../auth";
import {
  PARKING_LOT__STATUS_ALIAS,
  PARKING_LOT_SERVICE__TYPE_ALIAS,
  ParkingLot,
  Prisma,
  prisma,
  VEHICLE__TYPE_ALIAS,
} from "../../db";
import { procedure } from "../../trpc";

const EARTH_RADIUS_IN_KM = 6371;

// Submit new parking lot for approval --------------------------------------------------------
const submitSchema = z.object({
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  mediaUrls: z.array(z.string()),
});
export const submit = procedure
  .use(authMiddleware(["PARKING_LOT_OWNER"]))
  .input(submitSchema)
  .mutation(async ({ input, ctx }) => {
    const { name, latitude, longitude, mediaUrls } = input;
    const {
      account: { id },
    } = ctx;

    const { id: ownerId } = await prisma.user.findUnique({ where: { accountId: id } });

    await prisma.parkingLot.create({
      data: {
        name,
        latitude,
        longitude,
        mediaUrls,
        status: "INACTIVE",
        ownerId,
      },
    });
  });

// Get parking lots ---------------------------------------------------------------------------
const getManySchema = z.object({
  name: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  radiusInKm: z.number().optional(),
  status: z.nativeEnum(PARKING_LOT__STATUS_ALIAS).optional(),
  isApproved: z.boolean().optional(),
});
export const getMany = procedure
  .use(authMiddleware())
  .input(getManySchema)
  .query(async ({ input }) => {
    const { name, latitude, longitude, radiusInKm, status, isApproved } = input;

    let parkingLots: Omit<ParkingLot, "mediaUrls">[];

    if (!latitude || !longitude || !radiusInKm) {
      parkingLots = await prisma.parkingLot.findMany({
        where: {
          name: { contains: name },
          status,
          isApproved,
        },
        select: {
          id: true,
          name: true,
          latitude: true,
          longitude: true,
          status: true,
          ownerId: true,
          isApproved: true,
          createdAt: true,
          updatedAt: true,
          approvedAt: true,
        },
      });
    } else {
      parkingLots = await prisma.$queryRaw(
        Prisma.sql`
          SELECT id, name, latitude, longitude, status, ownerId, isApproved, createdAt, updatedAt, approvedAt,
        (${EARTH_RADIUS_IN_KM} * acos(
            cos(radians(${latitude})) * 
            cos(radians(latitude)) * 
            cos(radians(longitude) - radians(${longitude})) + 
            sin(radians(${latitude})) * 
            sin(radians(latitude))
        )) AS distance
          FROM "ParkingLot"
          WHERE 
        "isApproved" = COALESCE(${isApproved}, "isApproved") 
        AND "status" = COALESCE(${status}, "status")
        AND "name" = COALESCE(${name}, "name")
          HAVING distance < ${radiusInKm}
          ORDER BY distance ASC;
        `,
      );
    }

    return parkingLots;
  });

// Get single parking lot ----------------------------------------------------------------------
const getSingleSchema = z.object({
  id: z.number(),
});
export const getSingle = procedure
  .use(authMiddleware())
  .input(getSingleSchema)
  .query(async ({ input }) => {
    const { id } = input;

    const parkingLot = await prisma.parkingLot.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        latitude: true,
        longitude: true,
        status: true,
        ownerId: true,
        isApproved: true,
        createdAt: true,
        updatedAt: true,
        approvedAt: true,
        mediaUrls: true,
        parkingLotPrices: true,
        parkingSpots: true,
        parkingLotServices: true,
      },
    });

    return parkingLot;
  });

// Update parking lot price --------------------------------------------------------------------
const updatePriceSchema = z.object({
  parkingLotId: z.number(),
  price: z.number(),
  vehicleType: z.nativeEnum(VEHICLE__TYPE_ALIAS),
});
export const updatePrice = procedure
  .use(authMiddleware(["PARKING_LOT_OWNER"]))
  .input(updatePriceSchema)
  .mutation(async ({ ctx, input }) => {
    const {
      account: { id: ownerAccountId },
    } = ctx;
    const { parkingLotId, price, vehicleType } = input;

    const owner = await prisma.user.findUnique({ where: { accountId: ownerAccountId } });
    if (!owner) throw new Error("User not found");

    const parkingLot = await prisma.parkingLot.findFirst({
      where: {
        id: parkingLotId,
        ownerId: owner.id,
      },
    });
    if (!parkingLot) throw new Error("Parking lot not found");

    await prisma.parkingLotPrice.upsert({
      where: {
        vehicleType_parkingLotId: {
          parkingLotId: parkingLot.id,
          vehicleType: vehicleType,
        },
      },
      update: {
        price,
      },
      create: {
        price,
        parkingLotId,
        vehicleType,
      },
    });

    return;
  });

// Add parking spot ----------------------------------------------------------------------------
const addSpotSchema = z.object({
  parkingLotId: z.number(),
  name: z.string(),
  vehicleType: z.nativeEnum(VEHICLE__TYPE_ALIAS),
});
export const addSpot = procedure
  .use(authMiddleware(["PARKING_LOT_OWNER"]))
  .input(addSpotSchema)
  .mutation(async ({ ctx, input }) => {
    const {
      account: { id: ownerAccountId },
    } = ctx;

    const owner = await prisma.user.findUnique({ where: { accountId: ownerAccountId } });
    if (!owner) throw new Error("User not found");

    const parkingLot = await prisma.parkingLot.findFirst({
      where: {
        id: input.parkingLotId,
        ownerId: owner.id,
      },
    });
    if (!parkingLot) throw new Error("Parking lot not found");

    await prisma.parkingSpot.create({
      data: {
        name: input.name,
        vehicleType: input.vehicleType,
        parkingLotId: parkingLot.id,
      },
    });

    return;
  });

// Update parking spot ------------------------------------------------------------------------
const updateSpotSchema = z.object({
  spotId: z.number(),
  name: z.string().optional(),
  vehicleType: z.nativeEnum(VEHICLE__TYPE_ALIAS).optional(),
});
export const updateSpot = procedure
  .use(authMiddleware(["PARKING_LOT_OWNER"]))
  .input(updateSpotSchema)
  .mutation(async ({ ctx, input }) => {
    const {
      account: { id: ownerAccountId },
    } = ctx;
    const { spotId, name, vehicleType } = input;

    const owner = await prisma.user.findUnique({ where: { accountId: ownerAccountId } });
    if (!owner) throw new Error("User not found");

    const spot = await prisma.parkingSpot.findFirst({
      where: {
        id: spotId,
        parkingLot: {
          ownerId: owner.id,
        },
      },
    });
    if (!spot) throw new Error("Parking spot not found");

    await prisma.parkingSpot.update({
      where: { id: spotId },
      data: {
        name,
        vehicleType,
      },
    });

    return;
  });

// Remove parking spot ------------------------------------------------------------------------
const removeSpotSchema = z.object({
  spotId: z.number(),
});
export const removeSpot = procedure
  .use(authMiddleware(["PARKING_LOT_OWNER"]))
  .input(removeSpotSchema)
  .mutation(async ({ ctx, input }) => {
    const {
      account: { id: ownerAccountId },
    } = ctx;
    const { spotId } = input;

    const owner = await prisma.user.findUnique({ where: { accountId: ownerAccountId } });
    if (!owner) throw new Error("User not found");

    const spot = await prisma.parkingSpot.findFirst({
      where: {
        id: spotId,
        parkingLot: {
          ownerId: owner.id,
        },
      },
    });
    if (!spot) throw new Error("Parking spot not found");

    await prisma.parkingSpot.delete({ where: { id: spotId } });

    return;
  });

// Add parking lot service --------------------------------------------------------------------
const addServiceSchema = z.object({
  parkingLotId: z.number(),
  name: z.string(),
  type: z.nativeEnum(PARKING_LOT_SERVICE__TYPE_ALIAS),
  description: z.string(),
  mediaUrls: z.array(z.string()),
  price: z.number(),
  vehicleTypes: z.array(z.nativeEnum(VEHICLE__TYPE_ALIAS)),
});
export const addService = procedure
  .use(authMiddleware(["PARKING_LOT_OWNER"]))
  .input(addServiceSchema)
  .mutation(async ({ ctx, input }) => {
    const {
      account: { id },
    } = ctx;
  });
