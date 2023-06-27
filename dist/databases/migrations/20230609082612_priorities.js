"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
  CREATE TABLE priorities (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR NOT NULL
  );

  CREATE INDEX priorities_id_idx
  ON priorities(id);
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE priorities;`);
}
exports.down = down;
//# sourceMappingURL=20230609082612_priorities.js.map