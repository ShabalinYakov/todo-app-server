"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
  CREATE TABLE statuses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR NOT NULL
  );

  CREATE INDEX statuses_id_idx
  ON statuses(id);
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE statuses;`);
}
exports.down = down;
//# sourceMappingURL=20230609082746_statuses.js.map