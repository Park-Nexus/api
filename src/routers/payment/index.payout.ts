import { z } from "zod";
import _ from "lodash";
import { procedure } from "../../trpc";
import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { StripeUtils } from "../../utils/stripe";
import { TRPCError } from "@trpc/server";
import { jobManager } from "../../utils/jobManager";
import Stripe from "stripe";

const CREATE_PAYOUTS_JOB_KEY = "create-payouts-job";

// Get Platform Balance -----------------------------------------------------------------------
export const getPlatformBalance = procedure.use(authMiddleware()).query(async () => {
  const balance = await StripeUtils.retrieveAccountBalance();
  return { balance };
});

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

    const stripeConnectAccount = await StripeUtils.retrieveConnectAccount({
      accountId: stripeAccountId,
    });
    if (!stripeConnectAccount) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Stripe account not found" });
    }

    if (!stripeConnectAccount.details_submitted || !stripeConnectAccount.charges_enabled) {
      console.log("details not submitted");
      const url = await StripeUtils.getConnectAccountOnboardingUrl({ accountId: stripeAccountId });
      return { url };
    }

    console.log("details submitted");
    const url = await StripeUtils.getConnectAccountUrl({ accountId: stripeAccountId });
    return { url };
  });

// Get many payouts --------------------------------------------------------------------------
const getManySchema = z.object({
  lotOwnerEmail: z.string().optional(),
  parkingLotId: z.number().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});
export const getMany = procedure
  .use(authMiddleware())
  .input(getManySchema)
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
      include: {
        parkingLot: {
          select: {
            id: true,
            name: true,
            phone: true,
            owner: { select: { account: { select: { email: true } } } },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return payouts;
  });

// Get single payout --------------------------------------------------------------------------
const getSingleSchema = z.object({
  id: z.number(),
});
export const getSingle = procedure
  .use(authMiddleware())
  .input(getSingleSchema)
  .query(async ({ input, ctx }) => {
    const { id: accountId, role } = ctx.account;
    const { id } = input;

    const isAdmin = role === "ADMIN";

    const payout = await prisma.payoutRecord.findUnique({
      where: {
        id,
        parkingLot: {
          owner: { account: { id: isAdmin ? undefined : accountId } },
        },
      },
      include: {
        parkingLot: {
          include: {
            owner: { include: { account: { select: { email: true } } } },
          },
        },
        paymentRecords: {
          include: {
            user: { include: { account: { select: { email: true } } } },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });
    if (!payout) throw new TRPCError({ code: "NOT_FOUND", message: "Payout not found" });
    return payout;
  });

// Create payout --------------------------------------------------------------------------
export const create = procedure.use(authMiddleware(["ADMIN"])).mutation(() => {
  const isAlreadyRunning = jobManager.isJobRunning(CREATE_PAYOUTS_JOB_KEY);

  if (isAlreadyRunning) {
    throw new TRPCError({ code: "BAD_REQUEST", message: "Already generating payouts" });
  }

  const generatePayout = async () => {
    console.log("Creating payouts");
    try {
      jobManager.markJobRunning(CREATE_PAYOUTS_JOB_KEY);

      const parkingLots = await prisma.parkingLot.findMany({
        include: { owner: true },
      });

      await Promise.all(
        parkingLots.map(async (lot) => {
          // Get all unpaid out payments of the parking lot
          const unpaidOutPaymentRecords = await prisma.paymentRecord.findMany({
            where: {
              reservation: { parkingSpot: { parkingLotId: lot.id } },
              status: "PAID",
              payoutRecordId: null,
            },
          });

          const markedPaymentIds: number[] = [];
          let totalNetInCent = 0;
          let totalFeesInCent = 0;

          // split records to array of below 50 items
          const splittedUnpaidOutPaymentRecords = _.chunk(unpaidOutPaymentRecords, 50);

          // Get the fees and the total amount to be paid
          for (const records of splittedUnpaidOutPaymentRecords) {
            await Promise.all(
              records.map(async (record) => {
                const intentId = record.stripeIntentId;
                console.log("intentId", intentId);
                const paymentIntent = await StripeUtils.retrieveIntentWithBalanceTransaction({
                  intentId,
                });

                const charge = paymentIntent.latest_charge as Stripe.Charge;
                if (!charge || typeof charge === "string") return;

                const balanceTransaction = charge.balance_transaction as Stripe.BalanceTransaction;
                if (typeof balanceTransaction === "string") return;
                if (balanceTransaction.status !== "available") return;

                totalNetInCent += balanceTransaction.net;
                totalFeesInCent += balanceTransaction.fee;
                markedPaymentIds.push(record.id);
              }),
            );

            // Delay for 5 seconds to avoid rate limit
            await new Promise((resolve) => setTimeout(resolve, 5000));
          }
          if (totalNetInCent === 0) return;
          // Create a payout record
          const ownerStripeAccountId = lot.owner.stripeAccountId;
          // If user does not have a stripe account, mark the payout as failed
          if (!ownerStripeAccountId) {
            return await prisma.payoutRecord.create({
              data: {
                parkingLotId: lot.id,
                totalFeeInUsd: totalFeesInCent / 100,
                totalNetInUsd: totalNetInCent / 100,
                status: "FAILED",
                errorType: "NO_STRIPE_ACCOUNT",
              },
            });
          }
          //   // Check owner Connect Account
          //   const account = await StripeUtils.retrieveConnectAccount({
          //     accountId: ownerStripeAccountId,
          //   });

          try {
            const transfer = await StripeUtils.createTransfer({
              amountInCent: totalNetInCent,
              destinationConnectAccountId: ownerStripeAccountId,
            });
            await prisma.payoutRecord.create({
              data: {
                parkingLotId: lot.id,
                totalFeeInUsd: totalFeesInCent / 100,
                totalNetInUsd: totalNetInCent / 100,
                status: "COMPLETED",
                transferId: transfer.id,
              },
            });
          } catch (error) {
            console.error(JSON.stringify(error));
            await prisma.payoutRecord.create({
              data: {
                parkingLotId: lot.id,
                totalFeeInUsd: totalFeesInCent / 100,
                totalNetInUsd: totalNetInCent / 100,
                status: "FAILED",
                errorType: "CREATE_TRANSFER_FAILED",
              },
            });
          }
        }),
      );

      console.log("Payouts are generated");
      jobManager.markJobCompleted(CREATE_PAYOUTS_JOB_KEY);
    } catch (error) {
      console.error(error);
      jobManager.markJobCompleted(CREATE_PAYOUTS_JOB_KEY);
    }
  };

  generatePayout();
  return { message: "Payouts are being generated" };
});
