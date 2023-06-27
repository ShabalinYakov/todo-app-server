"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_AGE_COOKIE = exports.LOG_FORMAT = exports.LOG_DIR = exports.ORIGIN = exports.REFRESH_SECRET_KEY = exports.ACCESS_SECRET_KEY = exports.REFRESH_DURATION = exports.ACCESS_DURATION = exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_USER = exports.DB_PORT = exports.DB_HOST = exports.PORT = exports.NODE_ENV = exports.CREDENTIALS = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });
exports.CREDENTIALS = process.env.CREDENTIALS === 'true';
_a = process.env, exports.NODE_ENV = _a.NODE_ENV, exports.PORT = _a.PORT, exports.DB_HOST = _a.DB_HOST, exports.DB_PORT = _a.DB_PORT, exports.DB_USER = _a.DB_USER, exports.DB_PASSWORD = _a.DB_PASSWORD, exports.DB_DATABASE = _a.DB_DATABASE, exports.ACCESS_DURATION = _a.ACCESS_DURATION, exports.REFRESH_DURATION = _a.REFRESH_DURATION, exports.ACCESS_SECRET_KEY = _a.ACCESS_SECRET_KEY, exports.REFRESH_SECRET_KEY = _a.REFRESH_SECRET_KEY, exports.ORIGIN = _a.ORIGIN, exports.LOG_DIR = _a.LOG_DIR, exports.LOG_FORMAT = _a.LOG_FORMAT, exports.MAX_AGE_COOKIE = _a.MAX_AGE_COOKIE;
//# sourceMappingURL=index.js.map