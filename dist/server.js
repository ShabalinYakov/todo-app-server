"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = require("./config");
const logger_1 = require("./utils/logger");
const app_1 = tslib_1.__importDefault(require("./app"));
const start = async () => {
    try {
        app_1.default.listen(config_1.PORT, () => {
            logger_1.logger.info(`======== ENV: ${config_1.NODE_ENV} =======`);
            logger_1.logger.info(`🚀 App listening on the port ${config_1.PORT}`);
        });
    }
    catch (error) {
        logger_1.logger.info(error);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map