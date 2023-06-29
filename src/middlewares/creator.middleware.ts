import { Response, NextFunction } from 'express';

import { RequestWithUser } from '../interfaces/auth.interface';
import HttpException from '../exceptions/HttpException';
import { tasksService } from '../services/tasks.service';

const checkCreator = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const { task_id } = req.body;

  if (!task_id || typeof task_id !== 'string') {
    throw HttpException.BadRequest('Invalid value');
  }

  const isCreator = await tasksService.isCreator(task_id, req.user.id);

  if (!isCreator) {
    next(new HttpException(403, 'Forbidden'));
  }
  return next();
};
export default checkCreator;
