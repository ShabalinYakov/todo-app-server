import { NextFunction, Request, Response } from 'express';

import { tasksService } from '../services/tasks.service';
import { RequestWithUser } from '../interfaces/auth.interface';
import HttpException from '@/exceptions/HttpException';

class TasksController {
  async getTasks(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      const tasks = await tasksService.getTasks(req.user.id);

      res.status(200).send(tasks);
    } catch (error) {
      next(error);
    }
  }

  async getTasksSubordinate(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      const user_id = req.user.id;
      const { subordinate_id } = req.params;
      const tasks = await tasksService.getTasksSubordinate(user_id, subordinate_id);

      res.status(200).send(tasks);
    } catch (error) {
      next(error);
    }
  }

  async createTask(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      const { id: userId, is_leader } = req.user;
      const taskData = req.body;

      if (!is_leader) {
        if (taskData.responsible !== userId) throw new HttpException(403, 'Forbidden');
      }

      const response = await tasksService.createTask(userId, taskData);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

  async updateTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { task_id, title } = req.body;
      const response = await tasksService.updateTitle(task_id, title);

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

  async updateDescription(req: Request, res: Response, next: NextFunction) {
    try {
      const { task_id, description } = req.body;
      const response = await tasksService.updateDescription(task_id, description);

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

  async updateDeadline(req: Request, res: Response, next: NextFunction) {
    try {
      const { task_id, deadline } = req.body;
      const response = await tasksService.updateDeadline(task_id, deadline);

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

  async updatePriority(req: Request, res: Response, next: NextFunction) {
    try {
      const { task_id, priority } = req.body;
      console.log(task_id, priority);

      const response = await tasksService.updatePriority(task_id, priority);

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { task_id, status } = req.body;
      const response = await tasksService.updateStatus(task_id, status);

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

  async updateResponsible(req: Request, res: Response, next: NextFunction) {
    try {
      const { task_id, responsible } = req.body;
      const response = await tasksService.updateResponsible(task_id, responsible);

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}

export const tasksController = new TasksController();
