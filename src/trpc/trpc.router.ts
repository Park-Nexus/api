import { trpcInstance } from ".";
import { authRouter } from "../auth/routers";
import { parkingRouter, userRouter } from "../routers";

export const trpcRouter = trpcInstance.router({
  auth: authRouter,
  user: userRouter,
  parking: parkingRouter,
});
