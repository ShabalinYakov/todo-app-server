import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { body } from 'express-validator';

const authRouter = Router({ mergeParams: true });

authRouter.post('/login', [body(['login', 'password']).trim().isString().notEmpty()], authController.login);

export default authRouter;
