import { z } from "zod";
import { procedure } from "../../trpc";
import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { TRPCError } from "@trpc/server";
import { StripeUtils } from "../../utils/stripe";
import { EventNameFn, EventEmitter } from "../../utils/sse";
import { OneSignalUtils } from "../../utils/oneSignal";

// Create a new Stripe intent ----------------------------------------------------------------
const getIntentSchema = z.object({
  ticketId: z.number(),
});
export const getStripeIntent = procedure
  .use(authMiddleware(["USER"]))
  .input(getIntentSchema)
  .query(async ({ input, ctx }) => {
    const { ticketId } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    const paymentRecord = await prisma.paymentRecord.findFirst({
      where: {
        reservationId: ticketId,
        userId: user.id,
      },
    });
    if (!paymentRecord) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Payment record not found" });
    }
    if (paymentRecord.status !== "AWAITING") {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Payment record is not awaiting" });
    }

    if (!paymentRecord.stripeIntentId) {
      const newIntent = await StripeUtils.createIntent({
        amountInUsd: paymentRecord.amountInUsd,
        customerId: user.stripeCustomerId,
      });

      await prisma.paymentRecord.update({
        where: { id: paymentRecord.id },
        data: { stripeIntentId: newIntent.id },
      });

      return {
        amountInUsd: paymentRecord.amountInUsd,
        clientSecret: newIntent.client_secret,
      };
    }

    const intent = await StripeUtils.retrieveIntent({ intentId: paymentRecord.stripeIntentId });
    return {
      amountInUsd: paymentRecord.amountInUsd,
      clientSecret: intent.client_secret,
    };
  });

// Verify payment -------------------------------------------------------------------------------
const verifyPaymentSchema = z.object({
  ticketId: z.number(),
  intentId: z.string(),
});
export const verifyPayment = procedure
  .use(authMiddleware(["USER"]))
  .input(verifyPaymentSchema)
  .mutation(async ({ input, ctx }) => {
    const { ticketId, intentId } = input;
    const {
      account: { id: accountId },
    } = ctx;

    const user = await prisma.user.findUnique({ where: { accountId } });
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    const paymentRecord = await prisma.paymentRecord.findUnique({
      where: {
        reservationId: ticketId,
        userId: user.id,
        stripeIntentId: intentId,
      },
    });
    if (!paymentRecord) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Payment record not found" });
    }

    const intent = await StripeUtils.retrieveIntent({ intentId });
    if (!intent) throw new TRPCError({ code: "NOT_FOUND", message: "Intent not found" });

    if (intent.status !== "succeeded") {
      throw new TRPCError({ code: "BAD_REQUEST", message: "Payment failed" });
    }

    await prisma.paymentRecord.update({
      where: { id: paymentRecord.id },
      data: { status: "PAID" },
    });

    EventEmitter.getInstance().emit(EventNameFn.getSingleTicket(ticketId));

    void OneSignalUtils.sendExternalIdNotification({
      externalId: accountId,
      content: `We have received ${paymentRecord.amountInUsd} USD for your reservation, thank you!`,
      type: "PAYMENT",
    });
    await prisma.userNotification.create({
      data: {
        userId: user.id,
        title: "Payment received",
        message: `We have received ${paymentRecord.amountInUsd} USD for your reservation, thank you!`,
      },
    });
  });
