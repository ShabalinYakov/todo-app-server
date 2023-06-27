"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusesService = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../databases"));
class StatusesService {
    async getStatuses() {
        try {
            const { rows: statuses } = await databases_1.default.query(`SELECT * FROM statuses;`);
            return statuses;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.statusesService = new StatusesService();
//# sourceMappingURL=statuses.service.js.map