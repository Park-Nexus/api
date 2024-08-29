import { trpcInstance } from "../../trpc";

import * as lot from "./index.parkingLot";

export const parkingRouter = trpcInstance.router({
  lot: { submit: lot.submit },
  spot: {},
  record: {},
});
