import { NODE_ENV, PORT } from './config';
import { logger } from './utils/logger';
import app from './app';

const start = async () => {
  try {
    app.listen(PORT, () => {
      logger.info(`======== ENV: ${NODE_ENV} =======`);
      logger.info(`🚀 App listening on the port ${PORT}`);
    });
  } catch (error) {
    logger.info(error);
    process.exit(1);
  }
};

start();
