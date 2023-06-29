import { NextFunction, Request, Response } from 'express';
import { authService } from '@services/auth.service';
import { UserDto } from '@/dtos/user.dto';
import { MAX_AGE_COOKIE } from '@config';

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: UserDto = req.body;

      const response = await authService.login(userData);

      if (response.error !== null) {
        return res.status(200).send({ error: response.error });
      }

      res.cookie('refreshToken', response.refreshToken, {
        maxAge: MAX_AGE_COOKIE as unknown as number,
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

      const { refreshToken: newToken, accessToken, user } = await authService.refresh(refreshToken);

      res.cookie('refreshToken', newToken, {
        maxAge: Number(MAX_AGE_COOKIE),
        httpOnly: true,
      });

      res.status(200).send({ accessToken, user, error: {} });
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const removedToken = await authService.logout(refreshToken);

      res.clearCookie('refreshToken');
      res.status(200).json(removedToken);
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
