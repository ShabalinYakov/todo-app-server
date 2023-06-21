import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE creators_tasks (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE
  );

  CREATE INDEX creators_tasks_user_id_idx
  ON creators_tasks(user_id);

  CREATE INDEX creators_tasks_task_id_idx
  ON creators_tasks(task_id);
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE creators_tasks`);
}
