"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksController = void 0;
const tasks_service_1 = require("../services/tasks.service");
class TasksController {
    async viewerAllTasks(req, res, next) {
        try {
            const userId = req.user.id;
            const tasks = await tasks_service_1.tasksService.getAllTasksViewer(userId);
            res.status(200).send(tasks);
        }
        catch (error) {
            next(error);
        }
    }
    async createTask(req, res, next) {
        try {
            const userId = req.user.id;
            const taskValue = req.body;
            const response = await tasks_service_1.tasksService.createTask(userId, taskValue);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    }
    async updateStatus(req, res, next) {
        try {
            const { taskId, statusId } = req.body;
            const response = await tasks_service_1.tasksService.updateStatus(taskId, statusId);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    }
    async updateTitle(req, res, next) {
        try {
            const { taskId, statusId } = req.body;
            const response = await tasks_service_1.tasksService.updateStatus(taskId, statusId);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    }
    async updateDescription(req, res, next) {
        try {
            const { taskId, statusId } = req.body;
            const response = await tasks_service_1.tasksService.updateStatus(taskId, statusId);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    }
    async updateDeadline(req, res, next) {
        try {
            const { taskId, statusId } = req.body;
            const response = await tasks_service_1.tasksService.updateStatus(taskId, statusId);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    }
    async updatePriority(req, res, next) {
        try {
            const { taskId, statusId } = req.body;
            const response = await tasks_service_1.tasksService.updateStatus(taskId, statusId);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.tasksController = new TasksController();
//# sourceMappingURL=tasks.controller.js.map