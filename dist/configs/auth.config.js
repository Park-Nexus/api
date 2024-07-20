"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
exports.authConfig = {
    jwtSecret: process.env.JWT_SECRET,
    jwtRefreshExpire: process.env.JWT_REFRESH_EXPIRES,
    jwtAccessExpire: process.env.JWT_ACCESS_EXPIRES,
    passwordRounds: parseInt(process.env.PASSWORD_ROUNDS),
};
