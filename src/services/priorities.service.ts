import db from '../databases';

class PrioritiesService {
  async getPriorities() {
    try {
      const { rows: priorities } = await db.query(`SELECT * FROM priorities;`);

      return priorities;
    } catch (error) {
      console.log(error);
    }
  }
}

export const prioritiesService = new PrioritiesService();
