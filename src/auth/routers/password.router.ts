import { TRPCError } from "@trpc/server";
import { prisma } from "../../db";
import { procedure } from "../../trpc";
import { generateOtp } from "../utils/opt.utils";
import { OneSignalUtils } from "../../utils/oneSignal";
import cron from "node-cron";
import * as z from "zod";
import { DateUtils } from "../../utils/date";
import dayjs from "dayjs";
import { hashPassword } from "../utils/password.utils";

const OTP_EXPIRES_IN_MINUTES = 3;

// Reset password request --------------------------------------------------------------
const resetPasswordRequestSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
});
export const resetPasswordRequestRouter = procedure
  .input(resetPasswordRequestSchema)
  .mutation(async ({ input }) => {
    const { email } = input;

    const account = await prisma.account.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!account) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

    const otp = generateOtp();
    const newOtp = await prisma.otpCode.create({
      data: {
        code: otp,
        type: "FORGOT_PASSWORD",
        accountId: account.id,
        expiredAt: new Date(Date.now() + OTP_EXPIRES_IN_MINUTES * 60 * 1000),
      },
    });
    await OneSignalUtils.sendForgotPasswordEmail({ email, otp });
    // Delete OTP after expires
    const deleteOtpJob = cron.schedule(
      DateUtils.toCronDate(dayjs().add(OTP_EXPIRES_IN_MINUTES, "minutes").toDate()),
      async () => {
        await prisma.otpCode.delete({
          where: {
            id: newOtp.id,
          },
        });
        deleteOtpJob.stop();
      },
    );

    return;
  });

// Verify reset password --------------------------------------------------------------
const verifyResetPasswordSchema = z.object({
  code: z.string(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  passwordRetype: z.string(),
});
export const verifyResetPasswordRouter = procedure
  .input(verifyResetPasswordSchema)
  .mutation(async ({ input }) => {
    const { code, password, passwordRetype } = input;

    if (password !== passwordRetype) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Passwords do not match",
      });
    }

    const otp = await prisma.otpCode.findFirst({
      where: {
        code,
        type: "FORGOT_PASSWORD",
        expiredAt: {
          gte: new Date(),
        },
      },
    });

    if (!otp) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Invalid OTP",
      });
    }

    const hash = await hashPassword(password);
    await prisma.account.update({
      where: { id: otp.accountId },
      data: { password: hash },
    });

    return;
  });
