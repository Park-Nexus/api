import { prisma } from '../../db';
import { procedure } from '../../trpc';
import * as z from 'zod';
import { hashPassword } from '../utils/password.utils';
import { ACCOUNT__ROLE_ALIAS } from '@prisma/client';

const inputSchema = z.object({
  phone: z.string().regex(/^\d+$/, 'Phone must be a number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerRouter = procedure
  .input(inputSchema)
  .mutation(async ({ input }) => {
    const { phone, password } = input;

    const hash = await hashPassword(password);

    const newUser = await prisma.account.create({
      data: { phone, password: hash, role: ACCOUNT__ROLE_ALIAS.ADMIN },
    });

    return newUser;
  });
