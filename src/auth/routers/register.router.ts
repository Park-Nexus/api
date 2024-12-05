import { ACCOUNT__ROLE_ALIAS, prisma } from "../../db";
import { procedure } from "../../trpc";
import * as z from "zod";
import { hashPassword } from "../utils/password.utils";
import { TRPCError } from "@trpc/server";
import { generateOtp } from "../utils/opt.utils";
import { sendRegisterOtpEmail } from "../../utils/oneSignal";
import cron from "node-cron";
import { DateUtils } from "../../utils/date";
import dayjs from "dayjs";

const OTP_EXPIRES_IN_MINUTES = 5;

// Register a new user --------------------------------------------------------------
const registerSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  passwordRetype: z.string(),
});
export const registerRouter = procedure.input(registerSchema).mutation(async ({ input }) => {
  const { email, password, passwordRetype } = input;

  if (password !== passwordRetype) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Passwords do not match",
    });
  }

  const currentAccount = await prisma.account.findUnique({ where: { email } });
  if (currentAccount?.isVerified === true) {
    throw new TRPCError({
      code: "CONFLICT",
      message: "User already exists, please login",
    });
  }

  const hash = await hashPassword(password);
  const newAccount = await prisma.account.upsert({
    update: { email, password: hash, role: ACCOUNT__ROLE_ALIAS.USER },
    create: { email, password: hash, role: ACCOUNT__ROLE_ALIAS.USER },
    where: { email },
  });

  const existingOtp = await prisma.otpCode.findFirst({
    where: {
      type: "REGISTER",
      accountId: newAccount.id,
      expiredAt: {
        gte: new Date(),
      },
    },
  });
  if (existingOtp) return;

  // Send OTP
  const otp = generateOtp();
  const newOtp = await prisma.otpCode.create({
    data: {
      code: otp,
      type: "REGISTER",
      accountId: newAccount.id,
      expiredAt: new Date(Date.now() + OTP_EXPIRES_IN_MINUTES * 60 * 1000),
    },
  });
  await sendRegisterOtpEmail({ email, otp });
  // cronjob remove otp code after 5 minutes
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

// Verify register --------------------------------------------------------------
const verifyRegisterSchema = z.object({
  code: z.string(),
});
export const verifyRegisterRouter = procedure
  .input(verifyRegisterSchema)
  .mutation(async ({ input }) => {
    const { code } = input;

    const otp = await prisma.otpCode.findFirst({
      where: {
        code,
        type: "REGISTER",
        expiredAt: {
          gte: new Date(),
        },
      },
      include: { account: true },
    });
    if (!otp) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "OTP code not found",
      });
    }

    const { account } = otp;
    if (account.role === "ADMIN") {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Admin accounts are not allowed" });
    }
    if (account.isVerified === true) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "User already verified" });
    }

    await prisma.account.update({
      where: { id: account.id },
      data: { isVerified: true },
    });
    await prisma.otpCode.deleteMany({
      where: {
        accountId: account.id,
        type: "REGISTER",
      },
    });

    return;
  });
