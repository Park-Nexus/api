import { initTRPC } from "@trpc/server";
import { Context } from "./trpc.context";

export const trpcInstance = initTRPC.context<Context>().create();
export const procedure = trpcInstance.procedure;

export { Context as TrpcContext };
