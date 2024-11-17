import { trpcInstance } from "../../trpc";

import * as key from "./index.key";
import * as reservation from "./index.reservation";
import * as method from "./index.method";
import * as payout from "./index.payout";

export const paymentRouter = trpcInstance.router({
  key: { stripePublishable: { get: key.getStripePublishableKey } },
  reservation: {
    stripeIntent: { get: reservation.getStripeIntent },
    verifyPayment: reservation.verifyPayment,
  },
  method: { get: { many: method.getMany }, add: method.add, remove: method.remove },
  payout: {
    stripeConnectUrl: { get: payout.getStripeConnectUrl },
    get: { many: payout.getMany },
  },
});
