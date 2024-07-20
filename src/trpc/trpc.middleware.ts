import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc.router";
import { createContext } from "./trpc.context";

export const trpcMiddleware = createExpressMiddleware({
  router: trpcRouter,
  createContext,
  onError({ error }) {
    console.error(`Server error ${error.stack}`);
  },
});
