import { TRPCError } from "@trpc/server";
import { prisma } from "../../db";
import { procedure } from "../../trpc";
import * as z from "zod";
import { genAccessToken, genRefreshToken } from "../utils/jwt.utils";
import { comparePassword } from "../utils/password.utils";
import { sendSignInOtpEmail } from "../../utils/oneSignal";
import { generateOtp } from "../utils/opt.utils";
import cron from "node-cron";
import { DateUtils } from "../../utils/date";
import dayjs from "dayjs";

const OTP_EXPIRES_IN_MINUTES = 5;

// Admin Login --------------------------------------------------------------
const adminLoginSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export const adminLoginRouter = procedure.input(adminLoginSchema).mutation(async ({ input }) => {
  const { email, password } = input;

  const account = await prisma.account.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!account) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

  if (account.role !== "ADMIN") {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Only admin accounts are allowed" });
  }

  const hash = account.password;
  const isPasswordValid = await comparePassword(password, hash);
  if (!isPasswordValid) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid password",
    });
  }

  const refreshToken = genRefreshToken({
    id: account.id,
  });
  const accessToken = genAccessToken({
    id: account.id,
    role: account.role,
  });

  await prisma.accountToken.create({
    data: {
      token: refreshToken,
      accountId: account.id,
    },
  });

  return { accessToken, refreshToken };
});

// User Login --------------------------------------------------------------
const loginSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export const loginRouter = procedure.input(loginSchema).mutation(async ({ input }) => {
  const { email, password } = input;

  const account = await prisma.account.findUnique({
    where: { email: email.toLowerCase(), isVerified: true },
  });

  if (!account) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

  if (account.role === "ADMIN") {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Admin accounts are not allowed" });
  }

  const hash = account.password;
  const isPasswordValid = await comparePassword(password, hash);
  if (!isPasswordValid) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid password",
    });
  }

  // Check if there is an existing OTP
  const existingOtp = await prisma.otpCode.findFirst({
    where: {
      accountId: account.id,
      type: "LOGIN",
      expiredAt: {
        gte: new Date(),
      },
    },
  });
  console.log(existingOtp);
  if (existingOtp) return;

  // Send OTP
  const otp = generateOtp();
  const newOtp = await prisma.otpCode.create({
    data: {
      code: otp,
      type: "LOGIN",
      accountId: account.id,
      expiredAt: new Date(Date.now() + OTP_EXPIRES_IN_MINUTES * 60 * 1000),
    },
  });
  await sendSignInOtpEmail({ email, otp });

  // Schedule OTP deletion
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

// Verify Login --------------------------------------------------------------
const verifyLoginSchema = z.object({
  code: z.string().length(6, "OTP must be 6 characters"),
});
export const verifyLoginRouter = procedure.input(verifyLoginSchema).mutation(async ({ input }) => {
  const { code } = input;

  const otp = await prisma.otpCode.findFirst({
    where: {
      code: code,
      type: "LOGIN",
      expiredAt: {
        gte: new Date(),
      },
    },
    include: { account: true },
  });

  if (!otp) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid OTP",
    });
  }

  const { account } = otp;
  if (account.role === "ADMIN") {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Admin accounts are not allowed" });
  }

  const refreshToken = genRefreshToken({
    id: account.id,
  });
  const accessToken = genAccessToken({
    id: account.id,
    role: account.role,
  });

  await prisma.accountToken.create({
    data: {
      token: refreshToken,
      accountId: account.id,
    },
  });
  await prisma.otpCode.deleteMany({
    where: { accountId: account.id, type: "LOGIN" },
  });

  return { accessToken, refreshToken };
});
