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
}

export const tasksController = new TasksController();
