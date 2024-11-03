import { prisma } from "../../db";
import { procedure } from "../../trpc";
import { authMiddleware } from "../auth.middleware";

export const getAuthState = procedure.use(authMiddleware()).query(async ({ ctx }) => {
  const {
    account: { id },
  } = ctx;

  const account = await prisma.account.findUnique({ where: { id } });
  if (account) {
    return { isAuthenticated: true };
  }

  return { isAuthenticated: false };
});
