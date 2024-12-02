import otpGenerator from "otp-generator";

export const generateOtp = () => {
  return otpGenerator.generate(6, {
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
  });
};
