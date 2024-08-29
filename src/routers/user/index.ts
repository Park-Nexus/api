import { trpcInstance } from "../../trpc";
import { create, get, update } from "./index.profile";

export const userRouter = trpcInstance.router({
  profile: { create, get, update },
});
