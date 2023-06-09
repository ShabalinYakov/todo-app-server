import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE supervisors_subordinates (
    supervisor UUID REFERENCES users(id) ON DELETE CASCADE,
    subordinate UUID REFERENCES users(id) ON DELETE CASCADE
  );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE supervisors_subordinates`);
}
