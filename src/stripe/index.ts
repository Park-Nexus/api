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

  // Save payment method -------------------------------------------------------------------
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

  // Remove payment method -----------------------------------------------------------------
  type TRemovePaymentMethodParams = {
    paymentMethodId: string;
  };
  export const removePaymentMethod = async ({ paymentMethodId }: TRemovePaymentMethodParams) => {
    await stripe.paymentMethods.detach(paymentMethodId);
  };

  // Retrieve payment methods ---------------------------------------------------------------
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

  // Create intent -------------------------------------------------------------------------
  type TCreateIntentParams = {
    amountInUsd: number;
    customerId: string;
  };
  export const createIntent = async ({ amountInUsd, customerId }: TCreateIntentParams) => {
    const intent = await stripe.paymentIntents.create({
      amount: amountInUsd,
      currency: "usd",
      customer: customerId,
      use_stripe_sdk: true,
    });

    return intent;
  };

  // Get intent -----------------------------------------------------------------------------
  type TGetIntentParams = {
    intentId: string;
  };
  export const getIntent = async ({ intentId }: TGetIntentParams) => {
    const intent = await stripe.paymentIntents.retrieve(intentId);
    return intent;
  };
}
