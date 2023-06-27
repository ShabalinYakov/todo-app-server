import db from '../databases';
import { Task } from '../interfaces/task.interfaces';

class LeaderService {
  async getTasksSubordinate(userId: string, subordinateId: string) {
    try {
      const { rows: tasks } = await db.query(`SELECT * FROM get_tasks_subordinate($1, $2)`, [userId, subordinateId]);
      return tasks;
    } catch (error) {
      console.log(error);
    }
  }

  async getSubordinates(userId: string) {
    try {
      const { rows: subordinates } = await db.query(
        `
        SELECT users.id,
            CONCAT(users.last_name || ' ' || ' ' || users.first_name || ' ' || users.middle_name) AS name
        FROM supervisors_subordinates AS s
            JOIN users ON s.subordinate = users.id
        WHERE s.supervisor = $1;
      `,
        [userId],
      );
      return subordinates;
    } catch (error) {
      console.log(error);
    }
  }

  async createTask(userId: string, taskValue: Task) {
    const { title, description, priority, deadline, responsible } = taskValue;
    const status = 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97'; // к выполнению
    const client = await db.connect();
    try {
      await client.query('BEGIN');

      const insertTask = `INSERT INTO tasks(title, description, deadline) VALUES($1, $2, $3) RETURNING *`;
      const { rows } = await client.query(insertTask, [title, description, deadline]);

      const task_id = rows[0].id;

      const insertTasksPriorities = `INSERT INTO tasks_priorities(task_id, priority_id) VALUES($1, $2) `;
      await client.query(insertTasksPriorities, [task_id, priority]);

      const insertTasksStatuses = `INSERT INTO tasks_statuses(task_id, status_id) VALUES($1, $2)`;
      await client.query(insertTasksStatuses, [task_id, status]);

      const insertCreatorsTasks = `INSERT INTO creators_tasks(user_id, task_id) VALUES($1, $2)`;
      await client.query(insertCreatorsTasks, [userId, task_id]);

      const insertResponsiblesTasks = `INSERT INTO responsibles_tasks(user_id, task_id) VALUES($1, $2)`;
      await client.query(insertResponsiblesTasks, [responsible, task_id]);

      await client.query('COMMIT');

      const { rows: task } = await client.query(`SELECT * FROM get_task_by_id($1)`, [task_id]);
      return task[0];
    } catch (error) {
      await client.query('ROLLBACK');
      console.log(error);
      return { message: 'invalid query' };
    } finally {
      client.release();
    }
  }

  async updateTask(task: Task) {
    const { id, title, deadline, description, priority, status, responsible } = task;
    try {
      const { rows } = await db.query(
        `
        UPDATE tasks, tasks_priorities, tasks_statuses, tasks_responsibles
        SET tasks.title = $2,
            tasks.deadline = $3,
            tasks.description = $4,
            tasks_priorities.priority_id = $5,
            tasks_statuses.status_id = $6,
            tasks_responsibles.user_id = $7
        WHERE tasks.id = $1 and tasks_priorities.task_id = $1 and tasks_statuses.task_id = $1 and tasks_responsibles.task_id = $1
        `,
        [id, title, deadline, description, priority, status, responsible],
      );
      return rows;
    } catch (error) {
      console.log(error);
    }
  }
}

export const leaderService = new LeaderService();
