export declare const trpcInstance: {
    _config: import("@trpc/server/dist/unstable-core-do-not-import").RootConfig<{
        ctx: {
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
            res: import("express").Response<any, Record<string, any>>;
            accessToken: string;
            account: import("../auth/auth.types").AccessToken;
        };
        meta: object;
        errorShape: import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape;
        transformer: false;
    }>;
    procedure: import("@trpc/server/dist/unstable-core-do-not-import").ProcedureBuilder<{
        req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
        res: import("express").Response<any, Record<string, any>>;
        accessToken: string;
        account: import("../auth/auth.types").AccessToken;
    }, object, object, typeof import("@trpc/server/dist/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/dist/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/dist/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/dist/unstable-core-do-not-import").unsetMarker, false>;
    middleware: <$ContextOverrides>(fn: import("@trpc/server/dist/unstable-core-do-not-import").MiddlewareFunction<{
        req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
        res: import("express").Response<any, Record<string, any>>;
        accessToken: string;
        account: import("../auth/auth.types").AccessToken;
    }, object, object, $ContextOverrides, unknown>) => import("@trpc/server/dist/unstable-core-do-not-import").MiddlewareBuilder<{
        req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
        res: import("express").Response<any, Record<string, any>>;
        accessToken: string;
        account: import("../auth/auth.types").AccessToken;
    }, object, $ContextOverrides, unknown>;
    router: {
        <TInput extends import("@trpc/server").RouterRecord>(input: TInput): import("@trpc/server/dist/unstable-core-do-not-import").BuiltRouter<{
            ctx: {
                req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
                res: import("express").Response<any, Record<string, any>>;
                accessToken: string;
                account: import("../auth/auth.types").AccessToken;
            };
            meta: object;
            errorShape: undefined extends import("@trpc/server/dist/unstable-core-do-not-import").ErrorFormatter<{
                req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
                res: import("express").Response<any, Record<string, any>>;
                accessToken: string;
                account: import("../auth/auth.types").AccessToken;
            }, any> ? import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape : any;
            transformer: undefined extends import("@trpc/server/dist/unstable-core-do-not-import").DataTransformerOptions ? false : true;
        }, TInput>;
        <TInput extends import("@trpc/server/dist/unstable-core-do-not-import").CreateRouterOptions>(input: TInput): import("@trpc/server/dist/unstable-core-do-not-import").BuiltRouter<{
            ctx: {
                req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
                res: import("express").Response<any, Record<string, any>>;
                accessToken: string;
                account: import("../auth/auth.types").AccessToken;
            };
            meta: object;
            errorShape: undefined extends import("@trpc/server/dist/unstable-core-do-not-import").ErrorFormatter<{
                req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
                res: import("express").Response<any, Record<string, any>>;
                accessToken: string;
                account: import("../auth/auth.types").AccessToken;
            }, any> ? import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape : any;
            transformer: undefined extends import("@trpc/server/dist/unstable-core-do-not-import").DataTransformerOptions ? false : true;
        }, import("@trpc/server/dist/unstable-core-do-not-import").DecorateCreateRouterOptions<TInput>>;
    };
    mergeRouters: typeof import("@trpc/server/dist/unstable-core-do-not-import").mergeRouters;
    createCallerFactory: <TRecord extends import("@trpc/server").RouterRecord>(router: Pick<import("@trpc/server/dist/unstable-core-do-not-import").Router<{
        ctx: {
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
            res: import("express").Response<any, Record<string, any>>;
            accessToken: string;
            account: import("../auth/auth.types").AccessToken;
        };
        meta: object;
        errorShape: import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape;
        transformer: false;
    }, TRecord>, "_def">) => import("@trpc/server/dist/unstable-core-do-not-import").RouterCaller<{
        ctx: {
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
            res: import("express").Response<any, Record<string, any>>;
            accessToken: string;
            account: import("../auth/auth.types").AccessToken;
        };
        meta: object;
        errorShape: undefined extends import("@trpc/server/dist/unstable-core-do-not-import").ErrorFormatter<{
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
            res: import("express").Response<any, Record<string, any>>;
            accessToken: string;
            account: import("../auth/auth.types").AccessToken;
        }, any> ? import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape : any;
        transformer: undefined extends import("@trpc/server/dist/unstable-core-do-not-import").DataTransformerOptions ? false : true;
    }, TRecord>;
};
export declare const procedure: import("@trpc/server/dist/unstable-core-do-not-import").ProcedureBuilder<{
    req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    res: import("express").Response<any, Record<string, any>>;
    accessToken: string;
    account: import("../auth/auth.types").AccessToken;
}, object, object, typeof import("@trpc/server/dist/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/dist/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/dist/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/dist/unstable-core-do-not-import").unsetMarker, false>;
