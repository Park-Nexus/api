import { ACCOUNT__ROLE_ALIAS } from "@src/db";

export type AccessToken = {
  // Account info
  id: string;
  role: ACCOUNT__ROLE_ALIAS;
};

export type RefreshToken = {
  // Account info
  id: string;
};
