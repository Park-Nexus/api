import * as OneSignal from "@onesignal/node-onesignal";
import { oneSignalConfig } from "../../configs/onesignal.config";

const SIGN_IN_TEMPLATE_ID = "fd0c1b46-7b93-4267-a3fc-34873b523d1f";
const REGISTER_TEMPLATE_ID = "4115a3e0-da8e-457b-a03f-148a0e68c1f3";

const configuration = OneSignal.createConfiguration({
  restApiKey: oneSignalConfig.restApiKey,
  userAuthKey: "",
});

export const client = new OneSignal.DefaultApi(configuration);

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
    const response = await client.createNotification(notification);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

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
    const response = await client.createNotification(notification);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};
