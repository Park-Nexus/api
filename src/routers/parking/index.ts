import { trpcInstance } from "../../trpc";
import { submit } from "./index.parkingLot";

export const parkingRouter = trpcInstance.router({
  plot: { submit },
  spot: {},
  record: {},
});
