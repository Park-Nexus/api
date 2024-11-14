import { z } from "zod";
import { procedure } from "../../trpc";
import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { TRPCError } from "@trpc/server";
import { StripeUtils } from "../../utils/stripe";

// Get many payment methods ----------------------------------------------------------------
export const getMany = procedure.use(authMiddleware()).query(async ({ ctx }) => {
  const {
    account: { id: accountId },
  } = ctx;

  const user = await prisma.user.findUnique({ where: { accountId } });
  if (!user) throw new Error("User not found");
  if (user.stripeCustomerId === "") {
    throw new TRPCError({ code: "NOT_FOUND", message: "Stripe customer not found" });
  }

  return await StripeUtils.retrievePaymentMethods({ customerId: user.stripeCustomerId });
});

// Add a new payment method ----------------------------------------------------------------
const addSchema = z.object({
  stripeMethodId: z.string(),
});
export const add = procedure
  .use(authMiddleware(["USER"]))
  .input(addSchema)
  .mutation(async ({ input, ctx }) => {
    const { stripeMethodId } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new Error("User not found");
    if (user.stripeCustomerId === "") {
      throw new TRPCError({ code: "NOT_FOUND", message: "Stripe customer not found" });
    }

    await StripeUtils.savePaymentMethod({
      customerId: user.stripeCustomerId,
      paymentMethodId: stripeMethodId,
    });
  });

// Remove a payment method ----------------------------------------------------------------
const removeSchema = z.object({
  paymentMethodId: z.string(),
});
export const remove = procedure
  .use(authMiddleware(["USER"]))
  .input(removeSchema)
  .mutation(async ({ input, ctx }) => {
    const { paymentMethodId } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new Error("User not found");

    await StripeUtils.removePaymentMethod({
      paymentMethodId,
    });
  });
