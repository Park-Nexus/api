import { z } from "zod";
import { TRPCError } from "@trpc/server";

import { authMiddleware } from "../../auth";
import { prisma, User, USER__GENDER_ALIAS } from "../../db";
import { procedure } from "../../trpc";
import { deleteFile, getFileSignedUrl } from "../../utils/storage";
import { StripeUtils } from "../../utils/stripe";

// Create a new user profile --------------------------------------------------------------
const createSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().regex(/^\d+$/, "Phone must be a number"),
  avatarUrl: z.string().optional(),
  gender: z.nativeEnum(USER__GENDER_ALIAS),
});
export const create = procedure
  .use(authMiddleware())
  .input(createSchema)
  .mutation(async ({ input, ctx }) => {
    const {
      account: { id },
    } = ctx;

    const account = await prisma.account.findUnique({ where: { id } });
    if (!account) throw new TRPCError({ code: "NOT_FOUND", message: "Account not found" });

    const user = await prisma.user.findUnique({ where: { accountId: id } });
    if (user) throw new TRPCError({ code: "CONFLICT", message: "User already exists" });

    const stripeCustomer = await StripeUtils.createCustomer({
      name: `${input.firstName} ${input.lastName}`,
      email: account.email,
      phone: input.phone,
    });

    if (!stripeCustomer) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "There was an error" });
    }

    const { firstName, lastName, phone, avatarUrl, gender } = input;
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        phone,
        avatarUrl,
        gender,
        accountId: id,
        stripeCustomerId: stripeCustomer.id,
      },
    });
  });

// Get single profile -------------------------------------------------------------------------
const getSingleSchema = z
  .object({
    userId: z.number(),
  })
  .optional();
export const getSingle = procedure
  .use(authMiddleware())
  .input(getSingleSchema)
  .query(async ({ input, ctx }) => {
    const { userId } = input || {};
    const {
      account: { id, role },
    } = ctx;

    let user: User & { account: { email: string } };

    if (role !== "ADMIN" && userId) throw new TRPCError({ code: "FORBIDDEN" });

    if (userId) {
      user = await prisma.user.findUnique({
        where: { id: userId },
        include: { account: { select: { id: true, email: true } } },
      });
    } else {
      user = await prisma.user.findUnique({
        where: { accountId: id },
        include: { account: { select: { id: true, email: true } } },
      });
    }

    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    user = {
      ...user,
      avatarUrl: user.avatarUrl ? await getFileSignedUrl({ path: user.avatarUrl }) : "",
    };

    return user;
  });

// Get many profiles ---------------------------------------------------------------------------
const getManySchema = z.object({}).optional();
export const getMany = procedure
  .use(authMiddleware(["ADMIN"]))
  .input(getManySchema)
  .query(async () => {
    const users = await prisma.user.findMany();
    return users;
  });

// Update  profile -----------------------------------------------------------------------
const updateSchema = z.object({
  userId: z.number().optional(),

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
    const { userId, firstName, lastName, phone, avatarUrl, gender } = input;
    const {
      account: { id, role },
    } = ctx;
    if (role !== "ADMIN" && userId) throw new TRPCError({ code: "FORBIDDEN" });

    let user: User;

    if (userId) {
      user = await prisma.user.findUnique({ where: { id: userId } });
    } else {
      user = await prisma.user.findUnique({ where: { accountId: id } });
    }

    if (!user) {
      throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
    }

    try {
      if (avatarUrl) await deleteFile({ path: user.avatarUrl });
    } catch (error) {
      console.error(error);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        firstName,
        lastName,
        phone,
        avatarUrl,
        gender,
      },
    });
  });
