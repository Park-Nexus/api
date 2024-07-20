"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procedure = exports.trpcInstance = void 0;
const server_1 = require("@trpc/server");
exports.trpcInstance = server_1.initTRPC.context().create();
exports.procedure = exports.trpcInstance.procedure;
