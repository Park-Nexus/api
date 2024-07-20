export declare const loginRouter: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        phone?: string;
        password?: string;
    };
    output: {
        accessToken: string;
        refreshToken: string;
    };
}>;
