"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return await knex.raw(`
    CREATE OR REPLACE FUNCTION get_task_by_id (uuid) RETURNS TABLE(
      id UUID,
      title VARCHAR,
      description TEXT,
      deadline TEXT,
      status VARCHAR,
      priority VARCHAR,
      creator JSON,
      responsible JSON,
      created_at DATE,
      updated_at DATE
  ) language plpgsql as $$ begin return query (
      SELECT tasks.id,
          tasks.title,
          tasks.description,
          TO_CHAR(tasks.deadline, 'yyyy-mm-dd') AS deadline,
          statuses.name AS status,
          priorities.name AS priority,
          json_build_object(
              'id',
              creator.id,
              'name',
              CONCAT(
                  creator.last_name || ' ' || creator.first_name || ' ' || creator.middle_name
              )
          ) AS creator,
          json_build_object(
              'id',
              responsible.id,
              'name',
              CONCAT(
                  responsible.last_name || ' ' || responsible.first_name || ' ' || responsible.middle_name
              )
          ) AS responsible,
          tasks.created_at,
          tasks.updated_at
          FROM tasks
             JOIN tasks_priorities AS p ON tasks.id = p.task_id
             JOIN tasks_statuses AS s ON tasks.id = s.task_id
             JOIN creators_tasks AS c ON tasks.id = c.task_id
             JOIN responsibles_tasks AS r ON tasks.id = r.task_id
             LEFT JOIN priorities ON priorities.id = p.priority_id
             LEFT JOIN statuses ON statuses.id = s.status_id
             LEFT JOIN users AS creator ON creator.id = c.user_id
             LEFT JOIN users AS responsible ON responsible.id = r.user_id
        WHERE tasks.id = $1
        );
end;
$$;
    `);
}
exports.up = up;
async function down(knex) {
    return await knex.raw(`DROP FUNCTION get_task_by_id;`);
}
exports.down = down;
//# sourceMappingURL=get_task_by_id.js.map