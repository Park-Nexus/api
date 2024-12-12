import { TRPCError } from "@trpc/server";
import { authMiddleware } from "../../auth";
import { prisma } from "../../db";
import { procedure } from "../../trpc";

export const getMany = procedure.use(authMiddleware()).query(async ({ ctx }) => {
  const { account } = ctx;

  const user = await prisma.user.findUnique({
    where: { accountId: account.id },
  });
  if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });

  const notifications = await prisma.userNotification.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return notifications;
});
