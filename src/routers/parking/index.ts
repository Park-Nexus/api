import { trpcInstance } from "../../trpc";
import * as lot from "./index.parkingLot";

export const parkingRouter = trpcInstance.router({
  lot: {
    submit: lot.submit,
    update: lot.update,
    get: { many: lot.getMany, single: lot.getSingle },
    price: { update: lot.updatePrice },
    spot: { add: lot.addSpot, update: lot.updateSpot, remove: lot.removeSpot },
    service: { add: lot.addService, update: lot.updateService, remove: lot.removeService },
  },
  spot: {},
  record: {},
});
