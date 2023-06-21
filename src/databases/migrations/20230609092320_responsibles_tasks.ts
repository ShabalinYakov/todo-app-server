import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.raw(`
  CREATE TABLE responsibles_tasks (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE
  );

  CREATE INDEX responsibles_tasks_task_id_idx
  ON responsibles_tasks(task_id);

  CREATE INDEX responsibles_tasks_user_id_idx
  ON responsibles_tasks(user_id);
  `);
}

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE responsibles_tasks`);
}
