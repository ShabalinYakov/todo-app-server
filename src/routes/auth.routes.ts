import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { body } from 'express-validator';
import authMiddleware from '../middlewares/auth.middleware';

const authRouter = Router({ mergeParams: true });

authRouter.post('/login', [body(['login', 'password']).trim().isString().notEmpty()], authController.login);
authRouter.get('/refresh', authController.refresh);
authRouter.post('/logout', authMiddleware, authController.logout);
export default authRouter;
