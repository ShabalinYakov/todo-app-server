import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE tasks_statuses (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    status_id UUID REFERENCES statuses(id) ON DELETE CASCADE
  );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE tasks_statuses`);
}
