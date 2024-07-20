"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const trpc_middleware_1 = require("./trpc/trpc.middleware");
const morgan_1 = __importDefault(require("morgan"));
const api_config_1 = require("./configs/api.config");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: ".env",
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(trpc_middleware_1.trpcMiddleware);
app.listen(api_config_1.apiConfig.port, () => {
    console.log("Server is running on port", api_config_1.apiConfig.port);
});
