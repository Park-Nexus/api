import * as OneSignal from "@onesignal/node-onesignal";
import { oneSignalConfig } from "../../configs/onesignal.config";

const SIGN_IN_TEMPLATE_ID = "fd0c1b46-7b93-4267-a3fc-34873b523d1f";

const configuration = OneSignal.createConfiguration({
  restApiKey: oneSignalConfig.restApiKey,
  userAuthKey: "",
});

export const client = new OneSignal.DefaultApi(configuration);

export const sendEmailNotification = async () => {
  const notification = new OneSignal.Notification();

  notification.app_id = "75950d5c-d2ce-4365-8549-9d6d4c1624ee";
  notification.template_id = "fd0c1b46-7b93-4267-a3fc-34873b523d1f";
  notification.include_email_tokens = ["vclong2003@gmail.com"];
  notification.custom_data = {
    otp: "123456",
    user_email: "vclong2003@gmail.com",
  };

  try {
    const response = await client.createNotification(notification);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
