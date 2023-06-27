"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const priorities_routes_1 = tslib_1.__importDefault(require("./priorities.routes"));
const statuses_routes_1 = tslib_1.__importDefault(require("./statuses.routes"));
const leader_routes_1 = tslib_1.__importDefault(require("./leader.routes"));
const tasks_routes_1 = tslib_1.__importDefault(require("./tasks.routes"));
const auth_routes_1 = tslib_1.__importDefault(require("./auth.routes"));
const router = (0, express_1.Router)({ mergeParams: true });
router.use('/auth', auth_routes_1.default);
router.use('/tasks', tasks_routes_1.default);
router.use('/priorities', priorities_routes_1.default);
router.use('/statuses', statuses_routes_1.default);
router.use('/leader', leader_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map