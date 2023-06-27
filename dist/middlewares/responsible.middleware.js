"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const tasks_service_1 = require("../services/tasks.service");
const checkResponsible = async (req, res, next) => {
    const userId = req.user.id;
    const taskId = req.body.taskId;
    const isCreator = await tasks_service_1.tasksService.isCreator(taskId, userId);
    console.log(isCreator);
    if (!isCreator) {
        next(new HttpException_1.default(403, 'Forbidden'));
    }
    return next();
};
exports.default = checkResponsible;
//# sourceMappingURL=responsible.middleware.js.map