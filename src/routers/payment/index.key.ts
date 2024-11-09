import { stripeConfig } from "../../configs/stripe.config";
import { procedure } from "../../trpc";

// Get publishable key -------------------------------------------------
export const getStripePublishableKey = procedure.query(() => {
  const key = stripeConfig.publishableKey;
  return { stripePublishableKey: key };
});
