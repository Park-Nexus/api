import { trpcInstance } from '../../trpc';
import { getAccessTokenRouter } from './getAccessToken.router';
import { loginRouter } from './login.router';
import { registerRouter } from './register.router';

export const authRouter = trpcInstance.router({
  login: loginRouter,
  register: registerRouter,
  getAccessToken: getAccessTokenRouter,
});
