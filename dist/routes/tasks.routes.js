"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks.controller");
const creator_middleware_1 = tslib_1.__importDefault(require("../middlewares/creator.middleware"));
const auth_middleware_1 = tslib_1.__importDefault(require("../middlewares/auth.middleware"));
const tasksRouter = (0, express_1.Router)({ mergeParams: true });
tasksRouter.get('/', auth_middleware_1.default, tasks_controller_1.tasksController.viewerAllTasks);
tasksRouter.post('/', auth_middleware_1.default, tasks_controller_1.tasksController.createTask);
tasksRouter.patch('/title', auth_middleware_1.default, creator_middleware_1.default, tasks_controller_1.tasksController.updateStatus);
tasksRouter.patch('/description', auth_middleware_1.default, creator_middleware_1.default, tasks_controller_1.tasksController.updateStatus);
tasksRouter.patch('/deadline', auth_middleware_1.default, creator_middleware_1.default, tasks_controller_1.tasksController.updateStatus);
tasksRouter.patch('/priority', auth_middleware_1.default, creator_middleware_1.default, tasks_controller_1.tasksController.updateStatus);
tasksRouter.patch('/status', auth_middleware_1.default, tasks_controller_1.tasksController.updateStatus);
exports.default = tasksRouter;
//# sourceMappingURL=tasks.routes.js.map