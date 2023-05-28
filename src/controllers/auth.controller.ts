import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { validationResult } from 'express-validator';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).send({
          errors: { message: 'INVALID_DATA', code: 400 },
        });
      }

      const { login, password } = req.body;
      const response = await authService.login({ login, password });

      if (response.error) {
        res.status(400).send(response);
        return;
      }

      res.cookie('refreshToken', response.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
