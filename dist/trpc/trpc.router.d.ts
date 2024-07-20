export declare const trpcRouter: import("@trpc/server/dist/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
        req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
        res: import("express").Response<any, Record<string, any>>;
        accessToken: string;
        account: import("../auth/auth.types").AccessToken;
    };
    meta: object;
    errorShape: import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, import("@trpc/server/dist/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    home: {
        public: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: string;
        }>;
        private: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: string;
        }>;
    };
    auth: import("@trpc/server/dist/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
            res: import("express").Response<any, Record<string, any>>;
            accessToken: string;
            account: import("../auth/auth.types").AccessToken;
        };
        meta: object;
        errorShape: import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape;
        transformer: false;
    }, {
        login: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                phone?: string;
                password?: string;
            };
            output: {
                accessToken: string;
                refreshToken: string;
            };
        }>;
        register: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                phone?: string;
                password?: string;
            };
            output: {
                id: string;
                createdAt: Date;
                phone: string;
                password: string;
                role: import(".prisma/client").$Enums.ACCOUNT__ROLE_ALIAS;
            };
        }>;
        getAccessToken: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                refreshToken?: string;
            };
            output: {
                accessToken: string;
            };
        }>;
    }>;
}>>;
