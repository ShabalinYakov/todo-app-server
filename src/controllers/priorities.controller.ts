import { NextFunction, Request, Response } from 'express';

import { prioritiesService } from '../services/priorities.service';

class PrioritiesController {
  async getPriorities(req: Request, res: Response, next: NextFunction) {
    try {
      const priorities = await prioritiesService.getPriorities();

      res.status(200).send(priorities);
    } catch (error) {
      next(error);
    }
  }
}

export const prioritiesController = new PrioritiesController();
