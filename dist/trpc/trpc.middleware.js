"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trpcMiddleware = void 0;
const express_1 = require("@trpc/server/adapters/express");
const trpc_router_1 = require("./trpc.router");
const trpc_context_1 = require("./trpc.context");
exports.trpcMiddleware = (0, express_1.createExpressMiddleware)({
    router: trpc_router_1.trpcRouter,
    createContext: trpc_context_1.createContext,
    onError({ error }) {
        console.error(`Server error ${error.stack}`);
    },
});
