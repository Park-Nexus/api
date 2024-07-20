import { AccessToken, RefreshToken } from "../auth.types";
import { authConfig } from "../../configs/auth.config";
import jwt from "jsonwebtoken";

// Access Token ---------------------------------------------------------
export const genAccessToken = (payload: AccessToken): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES,
  });

  return token;
};

export const verifyAccessToken = (token: string): AccessToken => {
  const payload = jwt.verify(token, process.env.JWT_SECRET) as AccessToken;

  return payload;
};

// Refresh Token ---------------------------------------------------------
export const genRefreshToken = (payload: RefreshToken): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES,
  });

  return token;
};

export const verifyRefreshToken = (token: string): RefreshToken => {
  const payload = jwt.verify(token, process.env.JWT_SECRET) as AccessToken;

  return payload;
};
