"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_middleware_1 = tslib_1.__importDefault(require("../middlewares/auth.middleware"));
const priorities_controller_1 = require("../controllers/priorities.controller");
const prioritiesRouter = (0, express_1.Router)({ mergeParams: true });
prioritiesRouter.get('/', auth_middleware_1.default, priorities_controller_1.prioritiesController.getPriorities);
exports.default = prioritiesRouter;
//# sourceMappingURL=priorities.routes.js.map