import { Router } from 'express';
import authRouter from './auth.routes';
import testRoute from './test.routes';

const router = Router({ mergeParams: true });

router.use('/auth', authRouter);
router.use('/test', testRoute);

export default router;
