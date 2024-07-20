"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const trpc_1 = require("../trpc");
const server_1 = require("@trpc/server");
const jwt_utils_1 = require("./utils/jwt.utils");
const authMiddleware = (allowedRoles) => trpc_1.trpcInstance.middleware((_a) => __awaiter(void 0, [_a], void 0, function* ({ ctx, next }) {
    const { accessToken } = ctx;
    if (!accessToken)
        throw new server_1.TRPCError({ code: 'UNAUTHORIZED' });
    let account;
    try {
        account = (0, jwt_utils_1.verifyAccessToken)(accessToken);
    }
    catch (_b) {
        throw new server_1.TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Invalid access token',
        });
    }
    if (allowedRoles && !allowedRoles.includes(account.role)) {
        throw new server_1.TRPCError({ code: 'FORBIDDEN' });
    }
    ctx.account = account;
    return next();
}));
exports.authMiddleware = authMiddleware;
