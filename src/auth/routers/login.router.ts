import { TRPCError } from '@trpc/server';
import { prisma } from '../../db';
import { procedure } from '../../trpc';
import * as z from 'zod';
import { genAccessToken, genRefreshToken } from '../utils/jwt.utils';
import { comparePassword } from '../utils/password.utils';

const inputSchema = z.object({
  phone: z.string().regex(/^\d+$/, 'Phone must be a number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const loginRouter = procedure
  .input(inputSchema)
  .mutation(async ({ input }) => {
    const { phone, password } = input;
    const account = await prisma.account.findUnique({
      where: { phone },
    });

    if (!account) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' });
    }

    const hash = account.password;
    const isPasswordValid = await comparePassword(password, hash);
    if (!isPasswordValid) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Invalid password',
      });
    }

    const refreshToken = genRefreshToken({
      id: account.id,
    });
    const accessToken = genAccessToken({
      id: account.id,
      role: account.role,
      phone: account.phone,
    });

    await prisma.authToken.create({
      data: {
        refreshToken,
        account: { connect: { id: account.id } },
      },
    });

    return { accessToken, refreshToken };
  });
