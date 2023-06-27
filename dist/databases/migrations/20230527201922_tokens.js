"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
  CREATE TABLE tokens (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    refresh_token TEXT NOT NULL
  );

  CREATE INDEX tokens_id_idx
  ON tokens(user_id);
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE tokens;`);
}
exports.down = down;
//# sourceMappingURL=20230527201922_tokens.js.map