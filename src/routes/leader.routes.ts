import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import { leaderController } from '../controllers/leader.controller';
import checkLeader from '../middlewares/leader.middleware';

const leaderRouter = Router({ mergeParams: true });

leaderRouter.get('/subordinates', authMiddleware, checkLeader, leaderController.getSubordinates);
leaderRouter.get('/tasks-subordinate/:id', authMiddleware, checkLeader, leaderController.getTasksSubordinate);
leaderRouter.post('/tasks', authMiddleware, checkLeader, leaderController.createTask);
leaderRouter.patch('/tasks/responsible', authMiddleware, checkLeader, leaderController.updateTask);

export default leaderRouter;
