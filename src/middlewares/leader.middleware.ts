import { Request, Response, NextFunction } from 'express';

import { RequestWithUser } from '../interfaces/auth.interfaces';
import HttpException from '../exceptions/HttpException';

const checkLeader = (req: Request, res: Response, next: NextFunction) => {
  const is_leader = (req as RequestWithUser).user.is_leader;
  if (!is_leader) throw new HttpException(403, 'Forbidden');
  next();
};
export default checkLeader;
