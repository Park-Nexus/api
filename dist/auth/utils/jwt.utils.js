"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.genRefreshToken = exports.verifyAccessToken = exports.genAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Access Token ---------------------------------------------------------
const genAccessToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_ACCESS_EXPIRES,
    });
    return token;
};
exports.genAccessToken = genAccessToken;
const verifyAccessToken = (token) => {
    const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    return payload;
};
exports.verifyAccessToken = verifyAccessToken;
// Refresh Token ---------------------------------------------------------
const genRefreshToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_REFRESH_EXPIRES,
    });
    return token;
};
exports.genRefreshToken = genRefreshToken;
const verifyRefreshToken = (token) => {
    const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    return payload;
};
exports.verifyRefreshToken = verifyRefreshToken;
