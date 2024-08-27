import { trpcInstance } from "../../trpc";

export const parkingRouter = trpcInstance.router({
  lot: {},
  spot: {},
  record: {},
});
