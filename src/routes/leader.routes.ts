import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import { leaderController } from '../controllers/leader.controller';

const leaderRouter = Router({ mergeParams: true });

leaderRouter.get('/subordinates', authMiddleware, leaderController.getSubordinates);
leaderRouter.get('/tasks-subordinates', authMiddleware, leaderController.getTasksSubordinates);

export default leaderRouter;
