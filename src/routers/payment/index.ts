import { trpcInstance } from "../../trpc";
import * as key from "./index.key";

export const paymentRouter = trpcInstance.router({
  key: { stripe: { publishable: { get: key.getStripePublishableKey } } },
  reservation: { stripeIntent: { create: {} } },
});
