import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE statuses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR NOT NULL
  );

  CREATE INDEX statuses_id_idx
  ON statuses(id);
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE statuses;`);
}
