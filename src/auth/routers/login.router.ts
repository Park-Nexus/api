import { TRPCError } from "@trpc/server";
import { prisma } from "../../db";
import { procedure } from "../../trpc";
import * as z from "zod";
import { genAccessToken, genRefreshToken } from "../utils/jwt.utils";
import { comparePassword } from "../utils/password.utils";
import { sendSignInOtpEmail } from "../../utils/oneSignal";
import { generateOtp } from "../utils/opt.utils";

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

const loginSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export const loginRouter = procedure.input(loginSchema).mutation(async ({ input }) => {
  const { email, password } = input;

  const account = await prisma.account.findUnique({
    where: { email: email.toLowerCase() },
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

  // Send OTP
  const otp = generateOtp();
  await prisma.otpCode.create({
    data: {
      code: otp,
      type: "LOGIN",
      accountId: account.id,
      expiredAt: new Date(Date.now() + 5 * 60 * 1000),
    },
  });
  await sendSignInOtpEmail({ email, otp });

  return;
});

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

  return { accessToken, refreshToken };
});
