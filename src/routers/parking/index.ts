import { trpcInstance } from "../../trpc";

export const parkingRouter = trpcInstance.router({
  plot: {},
  spot: {},
  record: {},
});
