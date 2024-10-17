import { trpcInstance } from "../../trpc";
import * as lot from "./index.parkingLot";

export const parkingRouter = trpcInstance.router({
  lot: {
    submit: lot.submit,
    get: { many: lot.getMany, single: lot.getSingle },
    price: { update: lot.updatePrice },
    spot: { add: lot.addSpot, update: lot.updateSpot, remove: lot.removeSpot },
    service: {},
  },
  spot: {},
  record: {},
});
