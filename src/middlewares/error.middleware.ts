import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/api-error';

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  try {
    if (err instanceof ApiError) {
      return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: 'На сервере произошла ошибка. Попробуйте позже' });
  } catch (error) {
    return next(error);
  }
};

export default errorMiddleware;
