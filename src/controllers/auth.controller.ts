import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { authService } from '../services/auth.service';
import ApiError from '../exceptions/api-error';
import { MAX_AGE_COOKIE } from '../config';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) throw ApiError.BadRequest('Invalid value');

      const { login, password } = req.body;
      const response = await authService.login({ login, password });
      if (response.error !== null) {
        res.status(200).send({ error: response.error });
        return;
      }

      res.cookie('refreshToken', response.refreshToken, {
        maxAge: MAX_AGE_COOKIE,
        httpOnly: true,
      });
      res.status(200).send({ accessToken: response.accessToken, user: response.user, error: {} });
    } catch (error) {
      next(error);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const { refreshToken: newToken, accessToken } = await authService.refresh(refreshToken);

      res.cookie('refreshToken', newToken, {
        maxAge: MAX_AGE_COOKIE,
        httpOnly: true,
      });

      res.status(200).send({ accessToken });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
