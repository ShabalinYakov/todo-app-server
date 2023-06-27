import db from '../databases';

class StatusesService {
  async getStatuses() {
    try {
      const { rows: statuses } = await db.query(`SELECT * FROM statuses;`);

      return statuses;
    } catch (error) {
      console.log(error);
    }
  }
}

export const statusesService = new StatusesService();
