"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const trpc_1 = require("../../trpc");
const getAccessToken_router_1 = require("./getAccessToken.router");
const login_router_1 = require("./login.router");
const register_router_1 = require("./register.router");
exports.authRouter = trpc_1.trpcInstance.router({
    login: login_router_1.loginRouter,
    register: register_router_1.registerRouter,
    getAccessToken: getAccessToken_router_1.getAccessTokenRouter,
});
