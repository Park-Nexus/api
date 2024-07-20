import { ACCOUNT__ROLE_ALIAS } from '@prisma/client';
import { AccessToken } from './auth.types';
export declare const authMiddleware: (allowedRoles?: ACCOUNT__ROLE_ALIAS[]) => import("@trpc/server/dist/unstable-core-do-not-import").MiddlewareBuilder<{
    req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    res: import("express").Response<any, Record<string, any>>;
    accessToken: string;
    account: AccessToken;
}, object, object, unknown>;
