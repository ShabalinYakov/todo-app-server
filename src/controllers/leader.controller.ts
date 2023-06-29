import { NextFunction, Response } from 'express';

import { RequestWithUser } from '../interfaces/auth.interface';
import { leaderService } from '../services/leader.service';

class LeaderController {
  async getSubordinates(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      const subordinates = await leaderService.getSubordinates(req.user.id);

      res.status(200).send(subordinates);
    } catch (error) {
      next(error);
    }
  }
}

export const leaderController = new LeaderController();
