import { trpcInstance } from "../../trpc";
import * as lot from "./index.parkingLot";

export const parkingRouter = trpcInstance.router({
  lot: {
    submit: lot.submit,
    update: lot.update,
    get: { many: lot.getMany, single: lot.getSingle, singleSubscription: lot.getSingleSubscribe },
    price: { update: lot.updatePrice },
    spot: { add: lot.addSpot, update: lot.updateSpot, remove: lot.removeSpot },
    service: {
      get: { single: lot.getSingleService },
      add: lot.addService,
      update: lot.updateService,
      remove: lot.removeService,
    },
    availability: { get: lot.getAvailability },
  },
});
