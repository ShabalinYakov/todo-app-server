import { Router } from 'express';

const authRouter = Router({ mergeParams: true });

authRouter.post('/login', () => 'authController');

export default authRouter;
