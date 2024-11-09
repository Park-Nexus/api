import { z } from "zod";
import dayjs from "dayjs";

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
import { deleteFile, extractPathFromURL, getFileSignedUrl } from "../../storage";
import { MAXIMUM_OVERSTAYING_DURATION_IN_HOURS } from "../../types/rules.types";

const EARTH_RADIUS_IN_KM = 6371;

// Submit new parking lot for approval --------------------------------------------------------
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // hh:mm
const submitSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  phone: z.string(),
  openAt: z.string().regex(timeRegex, "Open time must be in hh:mm format"),
  closeAt: z.string().regex(timeRegex, "Close time must be in hh:mm format"),
  latitude: z.number(),
  longitude: z.number(),
  mediaUrls: z.array(z.string()),
});
export const submit = procedure
  .use(authMiddleware(["USER"]))
  .input(submitSchema)
  .mutation(async ({ input, ctx }) => {
    const { name, latitude, longitude, mediaUrls, description, phone, openAt, closeAt } = input;
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
        phone,
        openAt,
        closeAt,
        description,
      },
    });
  });

// Update parking lot --------------------------------------------------------------------------
const updateSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  description: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  phone: z.string().regex(/^\d+$/, "Phone must be a number").optional(),
  openAt: z.string().regex(timeRegex, "Open time must be in hh:mm format").optional(),
  closeAt: z.string().regex(timeRegex, "Close time must be in hh:mm format").optional(),
  additionalMediaUrls: z.array(z.string()).optional(),
  removalMediaUrls: z.array(z.string()).optional(),
});
export const update = procedure
  .use(authMiddleware(["USER"]))
  .input(updateSchema)
  .mutation(async ({ ctx, input }) => {
    const {
      account: { id: ownerAccountId },
    } = ctx;
    const {
      id,
      name,
      description,
      latitude,
      longitude,
      phone,
      openAt,
      closeAt,
      additionalMediaUrls,
      removalMediaUrls,
    } = input;

    const owner = await prisma.user.findUnique({ where: { accountId: ownerAccountId } });
    if (!owner) throw new Error("User not found");

    const parkingLot = await prisma.parkingLot.findFirst({
      where: {
        id,
        ownerId: owner.id,
      },
    });
    if (!parkingLot) throw new Error("Parking lot not found");

    await Promise.all(
      removalMediaUrls?.map(async (url) => deleteFile({ path: extractPathFromURL(url) })),
    );
    const newMediaUrls = parkingLot.mediaUrls
      .filter((url) => !removalMediaUrls?.map((u) => extractPathFromURL(u)).includes(url))
      .concat(additionalMediaUrls || []);

    await prisma.parkingLot.update({
      where: { id },
      data: {
        name,
        description,
        phone,
        latitude,
        longitude,
        openAt,
        closeAt,
        mediaUrls: newMediaUrls,
      },
    });

    return;
  });

// Get parking lots ---------------------------------------------------------------------------
const getManySchema = z.object({
  name: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  radiusInKm: z.number().optional(),
  status: z.nativeEnum(PARKING_LOT__STATUS_ALIAS).optional(),
  isApproved: z.boolean().optional(),
  isMine: z.boolean().optional(),
});
export const getMany = procedure
  .use(authMiddleware())
  .input(getManySchema)
  .query(async ({ input, ctx }) => {
    const {
      account: { id },
    } = ctx;
    const { name, latitude, longitude, radiusInKm, status, isApproved } = input;

    const user = await prisma.user.findUnique({ where: { accountId: id } });
    if (!user) throw new Error("User not found");

    let parkingLots: Omit<
      ParkingLot,
      "mediaUrls" | "description" | "phone" | "ratings" | "openAt" | "closeAt"
    >[];

    if (!latitude || !longitude || !radiusInKm) {
      parkingLots = await prisma.parkingLot.findMany({
        where: {
          name: { contains: name },
          status,
          isApproved,
          ownerId: input.isMine ? { equals: user.id } : {},
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
        description: true,
        phone: true,
        openAt: true,
        closeAt: true,
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
    if (!parkingLot) throw new Error("Parking lot not found");

    const mediaSignedUrls = await Promise.all(
      parkingLot.mediaUrls.map(async (url) => {
        const signedUrl = await getFileSignedUrl({ path: url });
        return signedUrl;
      }),
    );
    parkingLot.mediaUrls = mediaSignedUrls;

    return parkingLot;
  });

// Update parking lot price --------------------------------------------------------------------
const updatePriceSchema = z.object({
  parkingLotId: z.number(),
  price: z.number(),
  vehicleType: z.nativeEnum(VEHICLE__TYPE_ALIAS),
});
export const updatePrice = procedure
  .use(authMiddleware(["USER"]))
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
  .use(authMiddleware(["USER"]))
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
  .use(authMiddleware(["USER"]))
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
  .use(authMiddleware(["USER"]))
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
  .use(authMiddleware(["USER"]))
  .input(addServiceSchema)
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

    await prisma.parkingLotService.create({
      data: {
        name: input.name,
        type: input.type,
        description: input.description,
        mediaUrls: input.mediaUrls,
        price: input.price,
        parkingLotId: parkingLot.id,
        vehicleTypes: input.vehicleTypes,
      },
    });

    return;
  });

// Update parking lot service ----------------------------------------------------------------
const updateServiceSchema = z.object({
  serviceId: z.number(),
  name: z.string().optional(),
  type: z.nativeEnum(PARKING_LOT_SERVICE__TYPE_ALIAS).optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  vehicleTypes: z.array(z.nativeEnum(VEHICLE__TYPE_ALIAS)).optional(),
  additionalMediaUrls: z.array(z.string()).optional(),
  removalMediaUrls: z.array(z.string()).optional(),
});
export const updateService = procedure
  .use(authMiddleware(["USER"]))
  .input(updateServiceSchema)
  .mutation(async ({ ctx, input }) => {
    const {
      account: { id: ownerAccountId },
    } = ctx;
    const {
      serviceId,
      name,
      type,
      description,
      additionalMediaUrls,
      removalMediaUrls,
      price,
      vehicleTypes,
    } = input;

    const owner = await prisma.user.findUnique({ where: { accountId: ownerAccountId } });
    if (!owner) throw new Error("User not found");

    const service = await prisma.parkingLotService.findFirst({
      where: {
        id: serviceId,
        parkingLot: {
          ownerId: owner.id,
        },
      },
    });
    if (!service) throw new Error("Parking lot service not found");

    await Promise.all(
      removalMediaUrls?.map((mediaUrl) => {
        deleteFile({ path: extractPathFromURL(mediaUrl) });
      }),
    );

    const newMediaUrls = service.mediaUrls
      .filter((url) => !removalMediaUrls.map((u) => extractPathFromURL(u)).includes(url))
      .concat(additionalMediaUrls || []);

    await prisma.parkingLotService.update({
      where: { id: serviceId },
      data: {
        name,
        type,
        description,
        mediaUrls: newMediaUrls,
        price,
        vehicleTypes,
      },
    });

    return;
  });

// Remove parking lot service ------------------------------------------------------------------
const removeServiceSchema = z.object({
  serviceId: z.number(),
});
export const removeService = procedure
  .use(authMiddleware(["USER"]))
  .input(removeServiceSchema)
  .mutation(async ({ ctx, input }) => {
    const {
      account: { id: ownerAccountId },
    } = ctx;
    const { serviceId } = input;

    const owner = await prisma.user.findUnique({ where: { accountId: ownerAccountId } });
    if (!owner) throw new Error("User not found");

    const service = await prisma.parkingLotService.findFirst({
      where: {
        id: serviceId,
        parkingLot: {
          ownerId: owner.id,
        },
      },
    });
    if (!service) throw new Error("Parking lot service not found");

    await prisma.parkingLotService.delete({ where: { id: serviceId } });

    return;
  });

// Get single parking lot service ------------------------------------------------------------------
const getSingleServiceSchema = z.object({
  serviceId: z.number(),
});
export const getSingleService = procedure
  .use(authMiddleware(["USER"]))
  .input(getSingleServiceSchema)
  .query(async ({ input }) => {
    const { serviceId } = input;

    const service = await prisma.parkingLotService.findFirst({
      where: {
        id: serviceId,
      },
    });
    if (!service) throw new Error("Parking lot service not found");

    const mediaUrls = await Promise.all(
      service.mediaUrls.map(async (mediaUrl) => {
        return await getFileSignedUrl({ path: mediaUrl });
      }),
    );
    service.mediaUrls = mediaUrls;

    return service;
  });

// Get parking lot availability ----------------------------------------------------------------------
const getAvailabilitySchema = z.object({
  lotId: z.number(),
  startTime: z.string(),
  endTime: z.string(),
});
export const getAvailability = procedure
  .use(authMiddleware(["USER"]))
  .input(getAvailabilitySchema)
  .query(async ({ input }) => {
    const { lotId, startTime, endTime } = input;

    const parkingLot = await prisma.parkingLot.findUnique({
      where: { id: lotId },
      include: { parkingSpots: true },
    });
    if (!parkingLot) throw new Error("Parking lot not found");

    const startTimeObj = dayjs(startTime).subtract(MAXIMUM_OVERSTAYING_DURATION_IN_HOURS, "hours");
    const endTimeObj = dayjs(endTime).add(MAXIMUM_OVERSTAYING_DURATION_IN_HOURS, "hours");

    const reservations = await prisma.reservation.findMany({
      where: {
        parkingSpot: {
          parkingLotId: lotId,
        },
        startTime: {
          gte: startTimeObj.toDate(),
        },
        endTime: {
          lte: endTimeObj.toDate(),
        },
        status: {
          notIn: ["EXPIRED", "CANCELLED", "COMPLETED"],
        },
      },
    });

    const reservedParkingSpots = reservations.map((reservation) => reservation.parkingSpotId);
    const availableParkingSpots = parkingLot.parkingSpots.filter(
      (spot) => !reservedParkingSpots.includes(spot.id),
    );

    const availableVehicleTypes = new Set<VEHICLE__TYPE_ALIAS>();
    availableParkingSpots.forEach((spot) => {
      availableVehicleTypes.add(spot.vehicleType);
    });

    return {
      availableVehicleTypes: Array.from(availableVehicleTypes),
    };
  });
