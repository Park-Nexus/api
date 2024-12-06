import * as OneSignal from "@onesignal/node-onesignal";
import { oneSignalConfig } from "../../configs/onesignal.config";

const SIGN_IN_TEMPLATE_ID = "fd0c1b46-7b93-4267-a3fc-34873b523d1f";
const REGISTER_TEMPLATE_ID = "4115a3e0-da8e-457b-a03f-148a0e68c1f3";

const configuration = OneSignal.createConfiguration({
  restApiKey: oneSignalConfig.restApiKey,
  userAuthKey: "",
});

export const client = new OneSignal.DefaultApi(configuration);

// Sign in OTP email -----------------------------------------------------------
type TSendSignInOtpEmailPayload = {
  email: string;
  otp: string;
};
export const sendSignInOtpEmail = async ({ email, otp }: TSendSignInOtpEmailPayload) => {
  const notification = new OneSignal.Notification();

  notification.app_id = oneSignalConfig.appId;
  notification.template_id = SIGN_IN_TEMPLATE_ID;
  notification.include_email_tokens = [email];
  notification.custom_data = {
    otp,
    user_email: email,
  };

  try {
    await client.createNotification(notification);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

// Register OTP email -----------------------------------------------------------
type TSendRegisterOtpEmailPayload = {
  email: string;
  otp: string;
};
export const sendRegisterOtpEmail = async ({ email, otp }: TSendRegisterOtpEmailPayload) => {
  const notification = new OneSignal.Notification();

  notification.app_id = oneSignalConfig.appId;
  notification.template_id = REGISTER_TEMPLATE_ID;
  notification.include_email_tokens = [email];
  notification.custom_data = {
    otp,
    user_email: email,
  };

  try {
    await client.createNotification(notification);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

// External ID notification -----------------------------------------------------
type TSendExternalIdNotificationPayload = {
  externalId: string;
  content: string;
  type: "CHECK-IN" | "CHECK-OUT" | "PAYMENT";
};
export const sendExternalIdNotification = async ({
  externalId,
  content,
  type,
}: TSendExternalIdNotificationPayload) => {
  const notification = new OneSignal.Notification();

  notification.app_id = oneSignalConfig.appId;
  notification.included_segments = ["Active Subscriptions"];
  notification["include_external_user_ids"] = [externalId];
  notification.name = type;
  notification.contents = { en: content };

  try {
    await client.createNotification(notification);
  } catch (error) {
    console.error("Error sending notification:", error);
    throw new Error("Error sending notification");
  }
};
