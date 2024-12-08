import * as OneSignal from "@onesignal/node-onesignal";
import { oneSignalConfig } from "../../configs/onesignal.config";
import { apiConfig } from "../../configs/api.config";

const SIGN_IN_TEMPLATE_ID = "fd0c1b46-7b93-4267-a3fc-34873b523d1f";
const REGISTER_TEMPLATE_ID = "4115a3e0-da8e-457b-a03f-148a0e68c1f3";
const PARKING_LOT_SUBMISSION_TEMPLATE_ID = "554a9dd1-e7d1-4046-84bd-3b5c1cf3defb";

const configuration = OneSignal.createConfiguration({
  restApiKey: oneSignalConfig.restApiKey,
  userAuthKey: "",
});

export const client = new OneSignal.DefaultApi(configuration);

export namespace OneSignalUtils {
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

  // Parking lot submission email -------------------------------------------------
  type TSendParkingLotSubmissionEmailPayload = {
    lotName: string;
    lotLocation: string;
    ownerName: string;
    ownerEmail: string;
    submittedAt: string;
  };
  export const sendParkingLotSubmissionEmail = async ({
    lotName,
    lotLocation,
    ownerName,
    ownerEmail,
    submittedAt,
  }: TSendParkingLotSubmissionEmailPayload) => {
    const notification = new OneSignal.Notification();

    const adminEmail = apiConfig.adminEmail;
    const adminPortalUrl = apiConfig.adminPortalUrl;

    notification.app_id = oneSignalConfig.appId;
    notification.template_id = PARKING_LOT_SUBMISSION_TEMPLATE_ID;
    notification.include_email_tokens = [adminEmail];
    notification.custom_data = {
      lotName: lotName,
      lotLocation: lotLocation,
      ownerName: ownerName,
      ownerEmail: ownerEmail,
      submittedAt: submittedAt,
      adminPortalUrl: adminPortalUrl,
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
    notification.target_channel = "push";
    notification.include_aliases = { external_id: [externalId] };
    notification.name = type;
    notification.contents = { en: content };

    try {
      await client.createNotification(notification);
    } catch (error) {
      console.error("Error sending notification:", error);
      throw new Error("Error sending notification");
    }
  };
}
