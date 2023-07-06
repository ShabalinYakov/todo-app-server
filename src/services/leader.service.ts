import { logger } from '@/utils/logger';
import db from '../databases';

class LeaderService {
  async getSubordinates(user_id: string) {
    try {
      const subordinates = await db('supervisors_subordinates')
        .select('users.id', db.raw("CONCAT(users.last_name, ' ', users.first_name, ' ', users.middle_name) AS name"))
        .innerJoin('users', 'supervisors_subordinates.subordinate', '=', 'users.id')
        .where({ supervisor: user_id });

      return subordinates;
    } catch (error) {
      logger.error(`[getSubordinates] >> Error : ${error}`);
    }
  }
}

export const leaderService = new LeaderService();
