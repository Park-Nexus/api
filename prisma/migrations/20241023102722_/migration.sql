/*
  Warnings:

  - The values [PARKING_LOT_OWNER] on the enum `ACCOUNT__ROLE_ALIAS` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ACCOUNT__ROLE_ALIAS_new" AS ENUM ('ADMIN', 'USER');
ALTER TABLE "Account" ALTER COLUMN "role" TYPE "ACCOUNT__ROLE_ALIAS_new" USING ("role"::text::"ACCOUNT__ROLE_ALIAS_new");
ALTER TYPE "ACCOUNT__ROLE_ALIAS" RENAME TO "ACCOUNT__ROLE_ALIAS_old";
ALTER TYPE "ACCOUNT__ROLE_ALIAS_new" RENAME TO "ACCOUNT__ROLE_ALIAS";
DROP TYPE "ACCOUNT__ROLE_ALIAS_old";
COMMIT;
