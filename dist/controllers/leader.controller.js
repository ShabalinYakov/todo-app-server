"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderController = void 0;
const leader_service_1 = require("../services/leader.service");
class LeaderController {
    async getTasksSubordinate(req, res, next) {
        try {
            const userId = req.user.id;
            const subordinateId = req.params.id;
            const tasks = await leader_service_1.leaderService.getTasksSubordinate(userId, subordinateId);
            res.status(200).send(tasks);
        }
        catch (error) {
            next(error);
        }
    }
    async getSubordinates(req, res, next) {
        try {
            const userId = req.user.id;
            const subordinates = await leader_service_1.leaderService.getSubordinates(userId);
            res.status(200).send(subordinates);
        }
        catch (error) {
            next(error);
        }
    }
    async createTask(req, res, next) {
        try {
            const userId = req.user.id;
            const taskValue = req.body;
            const response = await leader_service_1.leaderService.createTask(userId, taskValue);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    }
    async updateTask(req, res, next) {
        try {
            const payload = req.body;
            const response = await leader_service_1.leaderService.updateTask(payload);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.leaderController = new LeaderController();
//# sourceMappingURL=leader.controller.js.map