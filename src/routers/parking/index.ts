import { trpcInstance } from "../../trpc";

import * as lot from "./index.parkingLot";

export const parkingRouter = trpcInstance.router({
  lot: {
    submit: lot.submit,
    get: { many: lot.getMany, single: lot.getSingle },
    price: { update: lot.updatePrice },
  },
  spot: {},
  record: {},
});
