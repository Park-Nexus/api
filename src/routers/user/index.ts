import { trpcInstance } from "../../trpc";

import * as profile from "./index.profile";
import * as vehicle from "./index.vehicle";
import * as notification from "./index.notification";

export const userRouter = trpcInstance.router({
  profile: {
    create: profile.create,
    get: {
      single: profile.getSingle,
      many: profile.getMany,
    },
    update: profile.update,
  },
  vehicle: {
    add: vehicle.add,
    update: vehicle.update,
    get: {
      many: vehicle.getMany,
    },
  },
  notification: {
    get: {
      many: notification.getMany,
    },
  },
});
