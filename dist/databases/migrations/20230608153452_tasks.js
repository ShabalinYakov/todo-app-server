"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
    CREATE TABLE tasks (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      title VARCHAR NOT NULL,
      description TEXT,
      deadline DATE NOT NULL,
      created_at DATE DEFAULT CURRENT_DATE,
      updated_at DATE DEFAULT CURRENT_DATE
    );

    CREATE INDEX tasks_id_idx
    ON tasks(id);
    
    CREATE TRIGGER tasks_updated_at
    BEFORE UPDATE ON tasks
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_date();
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE tasks;`);
}
exports.down = down;
//# sourceMappingURL=20230608153452_tasks.js.map