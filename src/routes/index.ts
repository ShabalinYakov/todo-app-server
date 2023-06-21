import { Router } from 'express';

import prioritiesRouter from './priorities.routes';
import statusesRouter from './statuses.routes';
import leaderRouter from './leader.routes';
import tasksRouter from './tasks.routes';
import authRouter from './auth.routes';

const router = Router({ mergeParams: true });

router.use('/auth', authRouter);
router.use('/tasks', tasksRouter);
router.use('/priorities', prioritiesRouter);
router.use('/statuses', statusesRouter);
router.use('/leader', leaderRouter);

export default router;
