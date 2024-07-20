"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.loginRouter = void 0;
const server_1 = require("@trpc/server");
const db_1 = require("../../db");
const trpc_1 = require("../../trpc");
const z = __importStar(require("zod"));
const jwt_utils_1 = require("../utils/jwt.utils");
const password_utils_1 = require("../utils/password.utils");
const inputSchema = z.object({
    phone: z.string().regex(/^\d+$/, 'Phone must be a number'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});
exports.loginRouter = trpc_1.procedure
    .input(inputSchema)
    .mutation((_a) => __awaiter(void 0, [_a], void 0, function* ({ input }) {
    const { phone, password } = input;
    const account = yield db_1.prisma.account.findUnique({
        where: { phone },
    });
    if (!account) {
        throw new server_1.TRPCError({ code: 'NOT_FOUND', message: 'User not found' });
    }
    const hash = account.password;
    const isPasswordValid = yield (0, password_utils_1.comparePassword)(password, hash);
    if (!isPasswordValid) {
        throw new server_1.TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Invalid password',
        });
    }
    const refreshToken = (0, jwt_utils_1.genRefreshToken)({
        id: account.id,
    });
    const accessToken = (0, jwt_utils_1.genAccessToken)({
        id: account.id,
        role: account.role,
        phone: account.phone,
    });
    yield db_1.prisma.authToken.create({
        data: {
            refreshToken,
            account: { connect: { id: account.id } },
        },
    });
    return { accessToken, refreshToken };
}));
