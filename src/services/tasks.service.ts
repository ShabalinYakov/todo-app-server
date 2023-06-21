import db from '../databases';

class TasksService {
  async getAllTasksViewer(userId: string) {
    try {
      const { rows: tasks } = await db.query(
        `
        SELECT tasks.*,
            TO_CHAR(tasks.deadline, 'yyyy-mm-dd') AS deadline,
            priorities.name AS priority,
            statuses.name AS status,
            CONCAT(
                creator.last_name || ' ' || ' ' || creator.first_name || ' ' || creator.middle_name
            ) AS creator,
            CONCAT(
                responsible.last_name || ' ' || responsible.first_name || ' ' || responsible.middle_name
            ) AS responsible
        FROM tasks
            JOIN tasks_priorities AS p ON tasks.id = p.task_id
            JOIN tasks_statuses AS s ON tasks.id = s.task_id
            JOIN creators_tasks AS c ON tasks.id = c.task_id
            JOIN responsibles_tasks AS r ON tasks.id = r.task_id
            LEFT JOIN priorities ON priorities.id = p.priority_id
            LEFT JOIN statuses ON statuses.id = s.status_id
            LEFT JOIN users AS creator ON creator.id = c.user_id
            LEFT JOIN users AS responsible ON responsible.id = r.user_id
        WHERE r.user_id = $1 
        ORDER BY tasks.updated_at DESC;
        `,
        [userId],
      );

      return tasks;
    } catch (error) {
      console.log(error);
    }
  }
}

export const tasksService = new TasksService();