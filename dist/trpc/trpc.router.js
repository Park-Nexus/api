"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trpcRouter = void 0;
const _1 = require(".");
const auth_middleware_1 = require("../auth/auth.middleware");
const routers_1 = require("../auth/routers");
exports.trpcRouter = _1.trpcInstance.router({
    home: {
        public: _1.procedure.query(() => "Hello World"),
        private: _1.procedure
            .use((0, auth_middleware_1.authMiddleware)())
            .query(({ ctx }) => `Hello user id ${ctx.account.id}`),
    },
    auth: routers_1.authRouter,
});
