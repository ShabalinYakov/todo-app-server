import { logger } from '@/utils/logger';
import db from '../databases';
import { Task } from '@/interfaces/task.interfaces';

class TasksService {
  async getTasks(user_id: string) {
    try {
      const { rows: tasks } = await db.raw('SELECT * FROM get_tasks_user(?)', [user_id]);
      return tasks;
    } catch (error) {
      logger.error(`[getTasks] >> Error : ${error}`);
    }
  }

  async getTasksSubordinate(user_id: string, subordinate_id: string) {
    try {
      const { rows: tasks } = await db.raw(`SELECT * FROM get_tasks_subordinate(?, ?)`, [user_id, subordinate_id]);
      return tasks;
    } catch (error) {
      logger.error(`[getTasks] >> Error : ${error}`);
    }
  }

  async createTask(creator_id: string, taskData: Task) {
    const { title, deadline, description, priority: priority_id, responsible } = taskData;
    const status_id = 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97'; // к выполнению

    try {
      const { rows: createdTask } = await db.transaction(async trx => {
        const [newTask] = await trx('tasks').insert({ title, deadline, description }).returning('id');
        const task_id = newTask.id;

        await trx('responsibles_tasks').insert({ task_id, user_id: responsible });
        await trx('creators_tasks').insert({ task_id, user_id: creator_id });
        await trx('tasks_priorities').insert({ task_id, priority_id });
        await trx('tasks_statuses').insert({ task_id, status_id });

        const createdTask = await trx.raw('SELECT * FROM get_task_by_id(?)', [task_id]);

        return createdTask;
      });

      return createdTask[0];
    } catch (error) {
      logger.error(`[createTask] >> Error : ${error}`);
    }
  }

  async isCreator(task_id: string, user_id: string) {
    try {
      const [rows] = await db('creators_tasks').select('user_id').where({ task_id }).andWhere({ user_id });
      return rows;
    } catch (error) {
      logger.error(`[isCreator] >> Error : ${error}`);
    }
  }

  async isResponsible(task_id: string, user_id: string) {
    try {
      const [rows] = await db('responsibles_tasks').select('user_id').where({ task_id }).andWhere({ user_id });
      return rows;
    } catch (error) {
      logger.error(`[isResponsible] >> Error : ${error}`);
    }
  }

  async updateTitle(id: string, title: string) {
    try {
      await db('tasks').where({ id }).update({ title });
      const [updatedTask] = await db('tasks').select('tasks.id', 'tasks.title').where({ id });

      return updatedTask;
    } catch (error) {
      logger.error(`[updateTitle] >> Error : ${error}`);
    }
  }

  async updateDescription(id: string, description: string) {
    try {
      await db('tasks').where({ id }).update({ description });
      const [updatedTask] = await db('tasks').select('tasks.id', 'tasks.description').where({ id });

      return updatedTask;
    } catch (error) {
      logger.error(`[updateDescription] >> Error : ${error}`);
    }
  }

  async updateDeadline(id: string, deadline: string) {
    try {
      await db('tasks').where({ id }).update({ deadline });
      const [updatedTask] = await db('tasks')
        .select('tasks.id', db.raw("TO_CHAR(tasks.deadline, 'yyyy-mm-dd') AS deadline"))
        .where({ id });

      return updatedTask;
    } catch (error) {
      logger.error(`[updateDeadline] >> Error : ${error}`);
    }
  }

  async updatePriority(task_id: string, priority_id: string) {
    try {
      const [priority] = await db('tasks_priorities')
        .where({ task_id })
        .update({ priority_id })
        .returning('priority_id');
      const [priorityName] = await db('priorities').select('name').where({ id: priority.priority_id });

      return priorityName;
    } catch (error) {
      logger.error(`[updatePriority] >> Error : ${error}`);
    }
  }

  async updateStatus(task_id: string, status_id: string) {
    try {
      const [status] = await db('tasks_statuses').where({ task_id }).update({ status_id }).returning('status_id');
      const [statusName] = await db('statuses').select('name').where({ id: status.status_id });

      return statusName;
    } catch (error) {
      logger.error(`[updateStatus] >> Error : ${error}`);
    }
  }

  async updateResponsible(task_id: string, user_id: string) {
    try {
      await db('responsibles_tasks').where({ task_id }).update({ user_id });
      const [responsibleName] = await db('users')
        .select(db.raw("CONCAT(users.last_name, ' ', users.first_name, ' ', users.middle_name) AS name"))
        .where({ id: user_id });

      return responsibleName;
    } catch (error) {
      logger.error(`[updateResponsible] >> Error : ${error}`);
    }
  }
}

export const tasksService = new TasksService();
