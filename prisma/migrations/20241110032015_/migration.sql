/*
  Warnings:

  - A unique constraint covering the columns `[stripeIntentId]` on the table `PaymentRecord` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PaymentRecord_stripeIntentId_key" ON "PaymentRecord"("stripeIntentId");
