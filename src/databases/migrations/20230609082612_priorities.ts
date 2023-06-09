import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE priorities (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR NOT NULL
  );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE priorities;`);
}
