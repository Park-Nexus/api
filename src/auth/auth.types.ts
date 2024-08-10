import { ACCOUNT__ROLE_ALIAS } from "@prisma/client";

export type AccessToken = {
  id: bigint;
  role: ACCOUNT__ROLE_ALIAS;
};

export type RefreshToken = {
  id: bigint;
};
