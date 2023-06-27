"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const express_validator_1 = require("express-validator");
const auth_middleware_1 = tslib_1.__importDefault(require("../middlewares/auth.middleware"));
const authRouter = (0, express_1.Router)({ mergeParams: true });
authRouter.post('/login', [(0, express_validator_1.body)(['login', 'password']).trim().isString().notEmpty()], auth_controller_1.authController.login);
authRouter.get('/refresh', auth_controller_1.authController.refresh);
authRouter.post('/logout', auth_middleware_1.default, auth_controller_1.authController.logout);
exports.default = authRouter;
//# sourceMappingURL=auth.routes.js.map