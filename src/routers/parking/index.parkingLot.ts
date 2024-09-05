import { z } from "zod";

import { authMiddleware } from "../../auth";
import { PARKING_LOT__STATUS_ALIAS, ParkingLot, Prisma, prisma } from "../../db";
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

    let parkingLots: ParkingLot[];

    if (!latitude || !longitude || !radiusInKm) {
      parkingLots = await prisma.parkingLot.findMany({
        where: {
          name,
          status,
          isApproved,
        },
      });
    } else {
      parkingLots = await prisma.$queryRaw(
        Prisma.sql`
          SELECT *, 
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
