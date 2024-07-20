import { procedure, trpcInstance } from ".";
import { authMiddleware } from "../auth/auth.middleware";
import { authRouter } from "../auth/routers";

export const trpcRouter = trpcInstance.router({
  home: {
    public: procedure.query(() => "Hello World"),
    private: procedure
      .use(authMiddleware())
      .query(({ ctx }) => `Hello user id ${ctx.account.id}`),
  },
  auth: authRouter,
});
