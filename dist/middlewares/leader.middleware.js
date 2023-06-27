"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const checkLeader = (req, res, next) => {
    const is_leader = req.user.is_leader;
    if (!is_leader)
        throw new HttpException_1.default(403, 'Forbidden');
    next();
};
exports.default = checkLeader;
//# sourceMappingURL=leader.middleware.js.map