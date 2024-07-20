export declare const getAccessTokenRouter: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        refreshToken?: string;
    };
    output: {
        accessToken: string;
    };
}>;
