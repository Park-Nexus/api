import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { AccessToken } from '../auth/auth.types';

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  const accessToken = req.headers['authorization']?.split('Bearer ')[1] || null;
  const account: AccessToken | null = null;

  return {
    req,
    res,
    accessToken,
    account,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
