import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/api-error';
import { tokenService } from '../services/token.service';
import { RequestWithUser } from '../interfaces/auth.interfaces';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(new ApiError(500, 'Войдите'));
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return next(new ApiError(500, 'Войдите'));
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(new ApiError(500, 'Войдите'));
    }

    (req as RequestWithUser).user = userData;
    next();
  } catch (error) {
    return next(new ApiError(500, 'Войдите'));
  }
};
export default authMiddleware;
