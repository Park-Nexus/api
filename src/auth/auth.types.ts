import { ACCOUNT__ROLE_ALIAS } from '@prisma/client';

export type AccessToken = {
  id: string;
  phone: string;
  role: ACCOUNT__ROLE_ALIAS;
};

export type RefreshToken = {
  id: string;
};
