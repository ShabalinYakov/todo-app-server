import { Request, Response, NextFunction } from 'express';

import { RequestWithUser } from '../interfaces/auth.interfaces';
import ApiError from '../exceptions/api-error';

const leaderMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const is_leader = (req as RequestWithUser).user.is_leader;
  if (!is_leader) throw new ApiError(403, 'Forbidden');
  next();
};
export default leaderMiddleware;
