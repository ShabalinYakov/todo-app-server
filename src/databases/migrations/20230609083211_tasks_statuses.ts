import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE tasks_statuses (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    status_id UUID REFERENCES statuses(id) ON DELETE CASCADE
  );

  CREATE INDEX tasks_statuses_idx
  ON tasks_statuses(task_id);
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE tasks_statuses`);
}
