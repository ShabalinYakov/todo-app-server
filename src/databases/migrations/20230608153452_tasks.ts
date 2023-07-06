import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
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

export async function down(knex: Knex): Promise<void> {
  return await knex.raw(`DROP TABLE tasks;`);
}
