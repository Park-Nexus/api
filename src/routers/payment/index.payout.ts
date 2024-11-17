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
