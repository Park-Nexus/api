import { number, z } from "zod";
import { TRPCError } from "@trpc/server";
import { User, USER__GENDER_ALIAS } from "@prisma/client";

import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { procedure } from "../../trpc";

// Create a new user profile --------------------------------------------------------------
const createSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().regex(/^\d+$/, "Phone must be a number"),
  avatarUrl: z
    .string()
    .regex(
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
      "Avatar URL must be a valid URL",
    )
    .optional(),
  gender: z.nativeEnum(USER__GENDER_ALIAS),
});
export const create = procedure
  .use(authMiddleware())
  .input(createSchema)
  .mutation(async ({ input, ctx }) => {
    const {
      account: { id },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId: id } });
    if (user) throw new TRPCError({ code: "CONFLICT", message: "User already exists" });

    const { firstName, lastName, phone, avatarUrl, gender } = input;
    await prisma.user.create({
      data: { firstName, lastName, phone, avatarUrl, gender, accountId: id },
    });
  });

// Get profile ------------------------------------------------------------------------------
const getSchema = z.object({
  profileId: number().optional(),
});
export const get = procedure
  .use(authMiddleware())
  .input(getSchema)
  .query(async ({ input, ctx }) => {
    const { profileId } = input;
    const {
      account: { id, role },
    } = ctx;

    let user: User;

    if (role !== "ADMIN" && profileId) throw new TRPCError({ code: "FORBIDDEN" });

    if (profileId) {
      user = await prisma.user.findUnique({ where: { id: profileId } });
    } else {
      await prisma.user.findUnique({ where: { accountId: id } });
    }

    return user;
  });

// Update current profile ------------------------------------------------------------------
const updateSchema = z.object({
  profileId: z.number().optional(),

  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  avatarUrl: z.string().optional(),
  gender: z.nativeEnum(USER__GENDER_ALIAS).optional(),
});
export const update = procedure
  .use(authMiddleware())
  .input(updateSchema)
  .mutation(async ({ input, ctx }) => {
    const { profileId } = input;
    const {
      account: { id, role },
    } = ctx;

    if (role !== "ADMIN" && profileId) throw new TRPCError({ code: "FORBIDDEN" });

    let user: User;

    if (profileId) {
      user = await prisma.user.findUnique({ where: { id: profileId } });
    } else {
      user = await prisma.user.findUnique({ where: { accountId: id } });
    }

    if (!user) {
      throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
    }

    await prisma.user.update({ where: { id: user.id }, data: input });
  });
