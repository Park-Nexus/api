import { trpcInstance } from "@src/trpc";

import * as profile from "./index.profile";
import * as vehicle from "./index.vehicle";

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
    get: {
      many: vehicle.getMany,
    },
  },
});
