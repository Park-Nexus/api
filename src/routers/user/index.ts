import { trpcInstance } from "../../trpc";
import { create, getMany, getSingle, update } from "./index.profile";

export const userRouter = trpcInstance.router({
  profile: {
    create,
    get: { single: getSingle, many: getMany },
    update,
  },
});
