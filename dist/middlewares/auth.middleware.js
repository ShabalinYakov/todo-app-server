"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const token_service_1 = require("../services/token.service");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(HttpException_1.default.UnauthorizedError());
        }
        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(HttpException_1.default.UnauthorizedError());
        }
        const userData = token_service_1.tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(HttpException_1.default.UnauthorizedError());
        }
        req.user = userData;
        next();
    }
    catch (error) {
        return next(HttpException_1.default.UnauthorizedError());
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map