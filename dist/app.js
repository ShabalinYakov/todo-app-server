"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const express_1 = tslib_1.__importDefault(require("express"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const error_middleware_1 = tslib_1.__importDefault(require("./middlewares/error.middleware"));
const config_1 = require("./config");
const logger_1 = require("./utils/logger");
const routes_1 = tslib_1.__importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)(config_1.LOG_FORMAT, { stream: logger_1.stream }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, compression_1.default)());
app.use((0, cors_1.default)({ origin: config_1.ORIGIN, credentials: config_1.CREDENTIALS }));
app.use((0, hpp_1.default)());
app.use((0, helmet_1.default)());
app.use('/api', routes_1.default);
app.use(error_middleware_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map