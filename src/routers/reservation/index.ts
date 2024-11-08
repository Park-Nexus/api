import { trpcInstance } from "../../trpc";

export const reservationRouter = trpcInstance.router({
  ticket: { create: {} },
  get: {
    many: {},
    single: {},
  },
});
