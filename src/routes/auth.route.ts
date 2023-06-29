import validationMiddleware from '@/middlewares/validation.middleware';
import { authController } from '@controllers/auth.controller';
import { UserDto } from '@/dtos/user.dto';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', validationMiddleware(UserDto, 'body'), authController.login);
authRouter.get('/refresh', authController.refresh);
authRouter.post('/logout', authController.logout);

export default authRouter;
