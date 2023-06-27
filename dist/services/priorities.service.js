"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prioritiesService = void 0;
const tslib_1 = require("tslib");
const databases_1 = tslib_1.__importDefault(require("../databases"));
class PrioritiesService {
    async getPriorities() {
        try {
            const { rows: priorities } = await databases_1.default.query(`SELECT * FROM priorities;`);
            return priorities;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.prioritiesService = new PrioritiesService();
//# sourceMappingURL=priorities.service.js.map