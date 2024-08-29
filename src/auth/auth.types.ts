import { ACCOUNT__ROLE_ALIAS } from "@prisma/client";

export type AccessToken = {
  // Account info
  id: string;
  role: ACCOUNT__ROLE_ALIAS;
};

export type RefreshToken = {
  // Account info
  id: string;
};
