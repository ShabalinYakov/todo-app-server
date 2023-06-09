import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE creators_tasks (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE
  );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE creators_tasks`);
}
