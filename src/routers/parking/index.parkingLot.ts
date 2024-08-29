import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { procedure } from "../../trpc";

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
        ownerId: ownerId,
      },
    });
  });
