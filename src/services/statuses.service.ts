import { logger } from '@/utils/logger';
import db from '../databases';

class StatusesService {
  async getStatuses() {
    try {
      const statuses = await db('statuses');
      return statuses;
    } catch (error) {
      logger.error(`[getStatuses] >> Error : ${error}`);
    }
  }
}

export const statusesService = new StatusesService();
