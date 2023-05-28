import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/auth.service';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { login, password } = req.body;
      const { refreshToken, accessToken, user } = await authService.login({ login, password });

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
