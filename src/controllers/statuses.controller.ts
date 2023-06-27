import { NextFunction, Request, Response } from 'express';
import { statusesService } from '../services/statuses.service';

class StatusesController {
  async getStatuses(req: Request, res: Response, next: NextFunction) {
    try {
      const statuses = await statusesService.getStatuses();

      res.status(200).send(statuses);
    } catch (error) {
      next(error);
    }
  }
}

export const statusesController = new StatusesController();
