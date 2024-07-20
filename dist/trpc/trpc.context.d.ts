import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { AccessToken } from '../auth/auth.types';
export declare const createContext: ({ req, res }: CreateExpressContextOptions) => {
    req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    res: import("express").Response<any, Record<string, any>>;
    accessToken: string;
    account: AccessToken;
};
export type Context = Awaited<ReturnType<typeof createContext>>;
