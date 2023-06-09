import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE tasks_priorities (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    priority_id UUID REFERENCES priorities(id) ON DELETE CASCADE
  );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE tasks_priorities`);
}
