"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prioritiesController = void 0;
const priorities_service_1 = require("../services/priorities.service");
class PrioritiesController {
    async getPriorities(req, res, next) {
        try {
            const priorities = await priorities_service_1.prioritiesService.getPriorities();
            res.status(200).send(priorities);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.prioritiesController = new PrioritiesController();
//# sourceMappingURL=priorities.controller.js.map