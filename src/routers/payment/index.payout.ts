import { z } from "zod";
import { procedure } from "../../trpc";
import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { StripeUtils } from "../../utils/stripe";
import { TRPCError } from "@trpc/server";

// Get Stripe Connect URL ---------------------------------------------------------------------
export const getStripeConnectUrl = procedure
  .use(authMiddleware(["USER"]))
  .query(async ({ ctx }) => {
    const {
      account: { id: accountId },
    } = ctx;

    const account = await prisma.account.findUnique({ where: { id: accountId } });
    if (!account) throw new TRPCError({ code: "NOT_FOUND", message: "Account not found" });

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    const stripeAccountId = user.stripeAccountId;

    if (!stripeAccountId) {
      const newAccount = await StripeUtils.createConnectAccount({
        email: account.email,
        name: user.firstName + " " + user.lastName,
        phone: user.phone,
      });

      await prisma.user.update({
        where: { accountId },
        data: { stripeAccountId: newAccount.id },
      });

      const url = await StripeUtils.getConnectAccountUrl({ accountId: newAccount.id });
      return { url };
    }

    const url = await StripeUtils.getConnectAccountUrl({ accountId: stripeAccountId });
    return { url };
  });

// Get many payouts --------------------------------------------------------------------------
const getManyPayoutsSchema = z.object({
  lotOwnerEmail: z.string().optional(),
  parkingLotId: z.number().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});
export const getMany = procedure
  .use(authMiddleware())
  .input(getManyPayoutsSchema)
  .query(async ({ input, ctx }) => {
    const { id: accountId, role } = ctx.account;
    const { lotOwnerEmail, parkingLotId, startDate, endDate } = input;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
    const isAdmin = role === "ADMIN";

    const payouts = await prisma.payoutRecord.findMany({
      where: {
        createdAt: {
          gte: startDate ? new Date(startDate) : undefined,
          lte: endDate ? new Date(endDate) : undefined,
        },
        parkingLotId: parkingLotId ? parkingLotId : undefined,
        parkingLot: {
          owner: {
            id: isAdmin ? undefined : user.id,
            account: { email: lotOwnerEmail ? lotOwnerEmail : undefined },
          },
        },
      },
    });

    return payouts;
  });
