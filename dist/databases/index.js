"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const pg_1 = require("pg");
const localPoolConfig = {
    user: config_1.DB_USER,
    password: config_1.DB_PASSWORD,
    host: config_1.DB_HOST,
    port: config_1.DB_PORT,
    database: config_1.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false,
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
const poolConfig = process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    }
    : localPoolConfig;
const db = new pg_1.Pool(poolConfig);
exports.default = db;
//# sourceMappingURL=index.js.map