"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
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
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE responsibles_tasks`);
}
exports.down = down;
//# sourceMappingURL=20230609092320_responsibles_tasks.js.map