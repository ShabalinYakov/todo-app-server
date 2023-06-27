"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
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
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE creators_tasks`);
}
exports.down = down;
//# sourceMappingURL=20230609092113_creators_tasks.js.map