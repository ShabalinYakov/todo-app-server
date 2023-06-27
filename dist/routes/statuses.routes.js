"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_middleware_1 = tslib_1.__importDefault(require("../middlewares/auth.middleware"));
const statuses_controller_1 = require("../controllers/statuses.controller");
const statusesRouter = (0, express_1.Router)({ mergeParams: true });
statusesRouter.get('/', auth_middleware_1.default, statuses_controller_1.statusesController.getStatuses);
exports.default = statusesRouter;
//# sourceMappingURL=statuses.routes.js.map