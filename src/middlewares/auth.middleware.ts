import { Response, NextFunction } from 'express';
import { RequestWithUser } from '@interfaces/auth.interface';
import { tokenService } from '@services/token.service';
import HttpException from '@exceptions/HttpException';

const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(HttpException.UnauthorizedError());
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return next(HttpException.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(HttpException.UnauthorizedError());
    }

    req.user = userData;
    next();
  } catch (error) {
    return next(HttpException.UnauthorizedError());
  }
};
export default authMiddleware;
