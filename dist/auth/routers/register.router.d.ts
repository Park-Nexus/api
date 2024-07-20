export declare const registerRouter: import("@trpc/server").TRPCMutationProcedure<{
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
