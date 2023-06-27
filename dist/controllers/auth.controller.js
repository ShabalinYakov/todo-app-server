"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const tslib_1 = require("tslib");
const express_validator_1 = require("express-validator");
const auth_service_1 = require("../services/auth.service");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const config_1 = require("../config");
class AuthController {
    async login(req, res, next) {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty())
                throw HttpException_1.default.BadRequest('Invalid value');
            const { login, password } = req.body;
            const response = await auth_service_1.authService.login({ login, password });
            if (response.error !== null) {
                res.status(200).send({ error: response.error });
                return;
            }
            res.cookie('refreshToken', response.refreshToken, {
                maxAge: config_1.MAX_AGE_COOKIE,
                httpOnly: true,
            });
            res.status(200).send({ accessToken: response.accessToken, user: response.user, error: {} });
        }
        catch (error) {
            next(error);
        }
    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const { refreshToken: newToken, accessToken, user } = await auth_service_1.authService.refresh(refreshToken);
            res.cookie('refreshToken', newToken, {
                maxAge: config_1.MAX_AGE_COOKIE,
                httpOnly: true,
            });
            res.status(200).send({ accessToken, user, error: {} });
        }
        catch (error) {
            next(error);
        }
    }
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const removedToken = await auth_service_1.authService.logout(refreshToken);
            res.clearCookie('refreshToken');
            res.status(200).json(removedToken);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map