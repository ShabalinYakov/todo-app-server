"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
  CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    login VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    middle_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    is_leader BOOLEAN DEFAULT FALSE
  );

  CREATE INDEX users_id_idx
  ON users(id);
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP TABLE users;`);
}
exports.down = down;
//# sourceMappingURL=20230527201841_users.js.map