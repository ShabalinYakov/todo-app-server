import { Response, NextFunction } from 'express';

import { RequestWithUser } from '@interfaces/auth.interface';
import HttpException from '@exceptions/HttpException';
import { tasksService } from '@services/tasks.service';

const checkResponsibleOrLeader = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const { task_id } = req.body;
  const { is_leader } = req.user;

  if (!task_id || typeof task_id !== 'string') {
    throw HttpException.BadRequest('Invalid value');
  }

  const isResponsible = await tasksService.isResponsible(task_id, req.user.id);

  if (!isResponsible && !is_leader) {
    next(new HttpException(403, 'Forbidden'));
  }
  return next();
};
export default checkResponsibleOrLeader;
