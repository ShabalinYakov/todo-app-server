"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_middleware_1 = tslib_1.__importDefault(require("../middlewares/auth.middleware"));
const leader_controller_1 = require("../controllers/leader.controller");
const leader_middleware_1 = tslib_1.__importDefault(require("../middlewares/leader.middleware"));
const leaderRouter = (0, express_1.Router)({ mergeParams: true });
leaderRouter.get('/subordinates', auth_middleware_1.default, leader_middleware_1.default, leader_controller_1.leaderController.getSubordinates);
leaderRouter.get('/tasks-subordinate/:id', auth_middleware_1.default, leader_middleware_1.default, leader_controller_1.leaderController.getTasksSubordinate);
leaderRouter.post('/tasks', auth_middleware_1.default, leader_middleware_1.default, leader_controller_1.leaderController.createTask);
leaderRouter.patch('/tasks/responsible', auth_middleware_1.default, leader_middleware_1.default, leader_controller_1.leaderController.updateTask);
exports.default = leaderRouter;
//# sourceMappingURL=leader.routes.js.map