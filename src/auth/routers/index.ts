import { trpcInstance } from "../../trpc";
import { getAccessTokenRouter } from "./getAccessToken.router";
import { getAuthState } from "./getAuthState.router";
import * as login from "./login.router";
import * as register from "./register.router";

export const authRouter = trpcInstance.router({
  login: {
    user: login.adminLoginRouter,
    admin: login.adminLoginRouter,
    verify: login.verifyLoginRouter,
    google: login.googleLoginRouter,
  },
  register: { user: register.registerRouter, verify: register.verifyRegisterRouter },
  getAccessToken: getAccessTokenRouter,
  getAuthState: getAuthState,
});
