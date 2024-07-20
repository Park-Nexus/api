"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const createContext = ({ req, res }) => {
    var _a;
    const accessToken = ((_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split('Bearer ')[1]) || null;
    const account = null;
    return {
        req,
        res,
        accessToken,
        account,
    };
};
exports.createContext = createContext;
