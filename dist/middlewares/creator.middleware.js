"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const tasks_service_1 = require("../services/tasks.service");
const checkCreator = async (req, res, next) => {
    const userId = req.user.id;
    const { taskId } = req.body;
    if (!taskId || typeof taskId !== 'string') {
        throw HttpException_1.default.BadRequest('Invalid value');
    }
    const isCreator = await tasks_service_1.tasksService.isCreator(taskId, userId);
    console.log(isCreator);
    if (!isCreator) {
        next(new HttpException_1.default(403, 'Forbidden'));
    }
    return next();
};
exports.default = checkCreator;
//# sourceMappingURL=creator.middleware.js.map