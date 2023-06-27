"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusesController = void 0;
const statuses_service_1 = require("../services/statuses.service");
class StatusesController {
    async getStatuses(req, res, next) {
        try {
            const statuses = await statuses_service_1.statusesService.getStatuses();
            res.status(200).send(statuses);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.statusesController = new StatusesController();
//# sourceMappingURL=statuses.controller.js.map