"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
  CREATE TABLE tasks_priorities (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    priority_id UUID REFERENCES priorities(id) ON DELETE CASCADE
  );

  CREATE INDEX tasks_priorities_idx
  ON tasks_priorities(task_id);
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE tasks_priorities`);
}
exports.down = down;
//# sourceMappingURL=20230609083022_tasks_priorities.js.map