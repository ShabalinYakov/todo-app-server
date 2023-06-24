import { NextFunction, Request, Response } from 'express';

import { RequestWithUser } from '../interfaces/auth.interfaces';
import { leaderService } from '../services/leader.service';

class LeaderController {
  async getTasksSubordinate(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as RequestWithUser).user.id;
      const subordinateId = req.params.id;

      const tasks = await leaderService.getTasksSubordinate(userId, subordinateId);

      res.status(200).send(tasks);
    } catch (error) {
      next(error);
    }
  }
  async getSubordinates(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as RequestWithUser).user.id;
      const subordinates = await leaderService.getSubordinates(userId);

      res.status(200).send(subordinates);
    } catch (error) {
      next(error);
    }
  }
}

export const leaderController = new LeaderController();
