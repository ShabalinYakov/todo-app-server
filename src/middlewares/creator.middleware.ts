import { Request, Response, NextFunction } from 'express';

import { RequestWithUser } from '../interfaces/auth.interfaces';
import HttpException from '../exceptions/HttpException';
import { tasksService } from '../services/tasks.service';

const checkCreator = async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req as RequestWithUser).user.id;
  const { taskId } = req.body;

  if (!taskId || typeof taskId !== 'string') {
    throw HttpException.BadRequest('Invalid value');
  }

  const isCreator = await tasksService.isCreator(taskId, userId);
  console.log(isCreator);
  if (!isCreator) {
    next(new HttpException(403, 'Forbidden'));
  }
  return next();
};
export default checkCreator;
