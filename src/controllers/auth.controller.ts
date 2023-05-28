import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { authService } from '../services/auth.service';
import ApiError from '../exceptions/api-error';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) throw ApiError.BadRequest('Invalid value');

      const { login, password } = req.body;
      const { accessToken, refreshToken, user } = await authService.login({ login, password });

      res.cookie('refreshToken', refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).send({ accessToken, user });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
