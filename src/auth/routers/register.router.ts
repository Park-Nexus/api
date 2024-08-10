import { prisma } from "../../db";
import { procedure } from "../../trpc";
import * as z from "zod";
import { hashPassword } from "../utils/password.utils";
import { ACCOUNT__ROLE_ALIAS } from "@prisma/client";

const inputSchema = z.object({
  email: z
    .string()
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const registerRouter = procedure
  .input(inputSchema)
  .mutation(async ({ input }) => {
    const { email, password } = input;

    const hash = await hashPassword(password);

    const newAccount = await prisma.account.create({
      data: { email, password: hash, role: ACCOUNT__ROLE_ALIAS.ADMIN },
    });

    return newAccount;
  });
