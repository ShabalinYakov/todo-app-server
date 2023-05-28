import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE tokens (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    refresh_token TEXT NOT NULL
  );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE tokens;`);
}
