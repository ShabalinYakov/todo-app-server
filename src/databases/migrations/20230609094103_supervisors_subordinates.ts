import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE supervisors_subordinates (
    supervisor UUID REFERENCES users(id) ON DELETE CASCADE,
    subordinate UUID REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE INDEX supervisors_subordinates_subordinate_idx
  ON supervisors_subordinates(subordinate);

  CREATE INDEX supervisors_subordinates_supervisor_idx
  ON supervisors_subordinates(supervisor);
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE supervisors_subordinates`);
}
