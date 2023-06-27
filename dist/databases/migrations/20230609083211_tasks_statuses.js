"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
  CREATE TABLE tasks_statuses (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    status_id UUID REFERENCES statuses(id) ON DELETE CASCADE
  );

  CREATE INDEX tasks_statuses_idx
  ON tasks_statuses(task_id);
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE tasks_statuses`);
}
exports.down = down;
//# sourceMappingURL=20230609083211_tasks_statuses.js.map