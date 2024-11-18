import { trpcInstance } from ".";
import { authRouter } from "../auth/routers";
import {
  parkingRouter,
  userRouter,
  reservationRouter,
  paymentRouter,
  analyticsRoute,
  metricsRouter,
} from "../routers";

export const trpcRouter = trpcInstance.router({
  auth: authRouter,
  user: userRouter,
  parking: parkingRouter,
  reservation: reservationRouter,
  payment: paymentRouter,
  analytics: analyticsRoute,
  metrics: metricsRouter,
});

const separator = "------------------------------";
const getPrefix = (str: string) => str.split(".").slice(0, 2).join(".");
const routers = Object.keys(trpcRouter._def.procedures).reduce((acc, current) => {
  if (acc.length === 0) return [current];
  const last = acc[acc.length - 1];
  if (getPrefix(current) !== getPrefix(last)) return [...acc, separator, current];
  return [...acc, current];
}, [] as string[]);

console.info("TRPC routes: ", routers);
