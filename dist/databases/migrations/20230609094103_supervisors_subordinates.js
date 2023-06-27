"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
  CREATE TABLE supervisors_subordinates (
    supervisor UUID REFERENCES users(id) ON DELETE CASCADE,
    subordinate UUID REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE INDEX supervisors_subordinates_subordinate_idx
  ON supervisors_subordinates(subordinate);

  CREATE INDEX supervisors_subordinates_supervisor_idx
  ON supervisors_subordinates(supervisor);
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE supervisors_subordinates`);
}
exports.down = down;
//# sourceMappingURL=20230609094103_supervisors_subordinates.js.map