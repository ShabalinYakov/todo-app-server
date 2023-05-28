import { Router } from 'express';
import { authController } from '../controllers/auth.controller';

const authRouter = Router({ mergeParams: true });

authRouter.post('/login', authController.login);

export default authRouter;
