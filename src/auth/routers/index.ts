import { trpcInstance } from "../../trpc";
import { getAccessTokenRouter } from "./getAccessToken.router";
import { getAuthState } from "./getAuthState.router";
import { adminLoginRouter, loginRouter, verifyLoginRouter } from "./login.router";
import { registerRouter } from "./register.router";

export const authRouter = trpcInstance.router({
  login: { user: loginRouter, admin: adminLoginRouter, verify: verifyLoginRouter },
  register: registerRouter,
  getAccessToken: getAccessTokenRouter,
  getAuthState: getAuthState,
});
