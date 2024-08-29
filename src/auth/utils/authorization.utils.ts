import { ACCOUNT__ROLE_ALIAS } from "@prisma/client";

import { prisma } from "../../db";
import { TrpcContext } from "../../trpc";
import { TRPCError } from "@trpc/server";

interface ICheckRowLevelPermission {
  allowedIds: string[];
  bypassRoles?: ACCOUNT__ROLE_ALIAS[];
  ctx: TrpcContext;
}
export const checkRowLevelPermission = async ({
  allowedIds,
  bypassRoles,
  ctx,
}: ICheckRowLevelPermission) => {
  const {
    account: { id, role },
  } = ctx;

  if (bypassRoles?.includes(role)) return;

  if (allowedIds?.includes(id)) return;

  throw new TRPCError({
    code: "FORBIDDEN",
    message: "You do not have permission to perform this action",
  });
};
