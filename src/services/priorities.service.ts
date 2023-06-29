import { logger } from '@/utils/logger';
import db from '../databases';

class PrioritiesService {
  async getPriorities() {
    try {
      const priorities = await db('priorities');

      return priorities;
    } catch (error) {
      logger.error(`[getPriorities] >> Error : ${error}`);
    }
  }
}

export const prioritiesService = new PrioritiesService();
