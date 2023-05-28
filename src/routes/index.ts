import { Router } from 'express';
import authRouter from './auth.routes';

const router = Router({ mergeParams: true });

router.use('/auth', authRouter);

export default router;
