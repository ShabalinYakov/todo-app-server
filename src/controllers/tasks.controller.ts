import { NextFunction, Request, Response } from 'express';

import { tasksService } from '../services/tasks.service';
import { RequestWithUser } from '../interfaces/auth.interfaces';

class TasksController {
  async viewerAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as RequestWithUser).user.id;

      const tasks = await tasksService.getAllTasksViewer(userId);
      res.status(200).send(tasks);
    } catch (error) {
      next(error);
    }
  }

  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as RequestWithUser).user.id;
      const taskValue = req.body;

      const response = await tasksService.createTask(userId, taskValue);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { taskId, statusId } = req.body;

      const response = await tasksService.updateStatus(taskId, statusId);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
  async updateTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const { taskId, statusId } = req.body;

      const response = await tasksService.updateStatus(taskId, statusId);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
  async updateDescription(req: Request, res: Response, next: NextFunction) {
    try {
      const { taskId, statusId } = req.body;

      const response = await tasksService.updateStatus(taskId, statusId);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
  async updateDeadline(req: Request, res: Response, next: NextFunction) {
    try {
      const { taskId, statusId } = req.body;

      const response = await tasksService.updateStatus(taskId, statusId);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
  async updatePriority(req: Request, res: Response, next: NextFunction) {
    try {
      const { taskId, statusId } = req.body;

      const response = await tasksService.updateStatus(taskId, statusId);
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}

export const tasksController = new TasksController();
