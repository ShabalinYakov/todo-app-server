import { Router } from 'express';

import prioritiesRouter from './priorities.route';
import statusesRouter from './statuses.route';
import leaderRouter from './leader.route';
import tasksRouter from './tasks.route';
import authRouter from './auth.route';

const router = Router({ mergeParams: true });

router.use('/auth', authRouter);
router.use('/tasks', tasksRouter);
router.use('/priorities', prioritiesRouter);
router.use('/statuses', statusesRouter);
router.use('/leader', leaderRouter);

export default router;
