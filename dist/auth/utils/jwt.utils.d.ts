import { AccessToken, RefreshToken } from "../auth.types";
export declare const genAccessToken: (payload: AccessToken) => string;
export declare const verifyAccessToken: (token: string) => AccessToken;
export declare const genRefreshToken: (payload: RefreshToken) => string;
export declare const verifyRefreshToken: (token: string) => RefreshToken;
