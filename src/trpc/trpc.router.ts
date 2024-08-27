import { procedure, trpcInstance } from ".";
import { authMiddleware } from "../auth/auth.middleware";
import { authRouter } from "../auth/routers";
import { parkingRouter, userRouter } from "../routers";

export const trpcRouter = trpcInstance.router({
  home: {
    public: procedure.query(() => "Hello World"),
    private: procedure
      .use(authMiddleware())
      .query(({ ctx }) => `Hello user id ${ctx.account.id}`),
  },
  auth: authRouter,
  user: userRouter,
  parking: parkingRouter,
});
