"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
    CREATE OR REPLACE FUNCTION on_update_date()
    RETURNS trigger AS $$
    BEGIN
      NEW.updated_at = CURRENT_DATE;
      RETURN NEW;
    END;
    $$ language 'plpgsql';
  `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP FUNCTION on_update_date`);
}
exports.down = down;
//# sourceMappingURL=20230608152351_timestamp_trigger.js.map