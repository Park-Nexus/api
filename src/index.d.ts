import { trpcRouter } from "./trpc/trpc.router";

export type TrpcRouter = typeof trpcRouter;

export const Rules: {
  MAX_ALLOWED_RESERVATIONS: 2;
  MAX_TIME_ALLOWED_IN_HOURS: 48;
  EXPIRATION_TIME_IN_HOURS: 1;
  MAXIMUM_OVERSTAYING_DURATION_IN_HOURS: 1;
  OVERSTAYING_PENALTY_CHARGES_IN_USD: 50;
  MINIMUM_BOOKING_DURATION_IN_HOURS: 4;
};
