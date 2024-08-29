import { ACCOUNT__ROLE_ALIAS } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import { AccessToken } from "./auth.types";
import { trpcInstance } from "../trpc";
import { verifyAccessToken } from "./utils/jwt.utils";

export const authMiddleware = (allowedRoles?: ACCOUNT__ROLE_ALIAS[]) =>
  trpcInstance.middleware(async ({ ctx, next }) => {
    const { accessToken } = ctx;

    if (!accessToken) throw new TRPCError({ code: "UNAUTHORIZED" });

    let account: AccessToken;
    try {
      account = verifyAccessToken(accessToken);
    } catch {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid access token" });
    }

    if (allowedRoles && !allowedRoles.includes(account.role)) {
      throw new TRPCError({ code: "FORBIDDEN" });
    }

    ctx.account = account;

    return next();
  });
