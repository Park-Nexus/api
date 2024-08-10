import { prisma } from "../../db";
import { procedure } from "../../trpc";
import * as z from "zod";
import { genAccessToken, verifyRefreshToken } from "../utils/jwt.utils";
import { TRPCError } from "@trpc/server";

const inputSchema = z.object({
  refreshToken: z.string(),
});

export const getAccessTokenRouter = procedure
  .input(inputSchema)
  .mutation(async ({ input }) => {
    const { refreshToken } = input;

    let accountId: bigint;
    try {
      const payload = verifyRefreshToken(refreshToken);
      accountId = payload.id;
    } catch {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid refresh token",
      });
    }

    const authToken = await prisma.accountToken.findFirst({
      where: { token: refreshToken, accountId },
      include: { account: true },
    });

    if (!authToken) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid refresh token",
      });
    }

    const accessToken = genAccessToken({
      id: authToken.account.id,
      role: authToken.account.role,
    });

    return { accessToken };
  });
