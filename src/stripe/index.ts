import Stripe from "stripe";
import { stripeConfig } from "../configs/stripe.config";

const stripe = new Stripe(stripeConfig.secretKey);

export namespace StripeUtils {
  // Create customer -----------------------------------------------------------------------
  type TCreateCustomerParams = {
    email: string;
    name: string;
    phone: string;
  };
  export const createCustomer = async ({ email, name, phone }: TCreateCustomerParams) => {
    const customer = await stripe.customers.create({
      email,
      name,
      phone,
    });

    return customer;
  };

  // Save payment method ---------------------------------------------------------------------
  type TSavePaymentMethodParams = {
    customerId: string;
    paymentMethodId: string;
  };
  export const savePaymentMethod = async ({
    customerId,
    paymentMethodId,
  }: TSavePaymentMethodParams) => {
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });
  };

  // Remove payment method --------------------------------------------------------------------
  type TRemovePaymentMethodParams = {
    paymentMethodId: string;
  };
  export const removePaymentMethod = async ({ paymentMethodId }: TRemovePaymentMethodParams) => {
    await stripe.paymentMethods.detach(paymentMethodId);
  };

  // Retrieve payment methods ------------------------------------------------------------------
  type TRetrievePaymentMethodsParams = {
    customerId: string;
  };
  export const retrievePaymentMethods = async ({ customerId }: TRetrievePaymentMethodsParams) => {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: "card",
    });

    return paymentMethods.data[0];
  };

  // Create intent -----------------------------------------------------------------------------
  type TCreateIntentParams = {
    amountInUsd: number;
    customerId: string;
  };
  export const createIntent = async ({ amountInUsd, customerId }: TCreateIntentParams) => {
    const amountInCents = Math.round(amountInUsd * 100);

    const intent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "usd",
      customer: customerId,
    });

    return intent;
  };

  // Retrieve intent -----------------------------------------------------------------------------
  type TRetrieveIntentParams = {
    intentId: string;
  };
  export const retrieveIntent = async ({ intentId }: TRetrieveIntentParams) => {
    const intent = await stripe.paymentIntents.retrieve(intentId);
    return intent;
  };

  // Cancel intent -------------------------------------------------------------------------------
  type TCancelIntentParams = {
    intentId: string;
  };
  export const cancelIntent = async ({ intentId }: TCancelIntentParams) => {
    const intent = await stripe.paymentIntents.cancel(intentId);
    return intent;
  };

  // Refund intent -------------------------------------------------------------------------------
  type TRefundIntentParams = {
    intentId: string;
  };
  export const refundIntent = async ({ intentId }: TRefundIntentParams) => {
    const intent = await stripe.refunds.create({ payment_intent: intentId });
    return intent;
  };
}
