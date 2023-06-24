import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import { leaderController } from '../controllers/leader.controller';
import leaderMiddleware from '../middlewares/leader.middleware';

const leaderRouter = Router({ mergeParams: true });

leaderRouter.get('/subordinates', authMiddleware, leaderMiddleware, leaderController.getSubordinates);
leaderRouter.get('/tasks-subordinate/:id', authMiddleware, leaderMiddleware, leaderController.getTasksSubordinate);

export default leaderRouter;
