import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
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

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP FUNCTION on_update_date`);
}
