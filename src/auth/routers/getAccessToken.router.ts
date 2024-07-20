import { prisma } from '../../db';
import { procedure } from '../../trpc';
import * as z from 'zod';
import { genAccessToken, verifyRefreshToken } from '../utils/jwt.utils';
import { TRPCError } from '@trpc/server';

const inputSchema = z.object({
  refreshToken: z.string(),
});

export const getAccessTokenRouter = procedure
  .input(inputSchema)
  .mutation(async ({ input }) => {
    const { refreshToken } = input;

    let accountId: string;
    try {
      const payload = verifyRefreshToken(refreshToken);
      accountId = payload.id;
    } catch {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Invalid refresh token',
      });
    }

    const authToken = await prisma.authToken.findFirst({
      where: { refreshToken, accountId },
      include: { account: true },
    });

    if (!authToken) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Invalid refresh token',
      });
    }

    const accessToken = genAccessToken({
      id: authToken.account.id,
      role: authToken.account.role,
      phone: authToken.account.phone,
    });

    return { accessToken };
  });
