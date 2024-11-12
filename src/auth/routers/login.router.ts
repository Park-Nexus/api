import { TRPCError } from "@trpc/server";
import { prisma } from "../../db";
import { procedure } from "../../trpc";
import * as z from "zod";
import { genAccessToken, genRefreshToken } from "../utils/jwt.utils";
import { comparePassword } from "../utils/password.utils";

const inputSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  isAdmin: z.boolean().optional(),
});

export const loginRouter = procedure.input(inputSchema).mutation(async ({ input }) => {
  const { email, password, isAdmin } = input;

  const account = await prisma.account.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!account) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

  if (account.role === "ADMIN" && !isAdmin) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Admin accounts are not allowed" });
  }
  if (isAdmin && account.role !== "ADMIN") {
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
