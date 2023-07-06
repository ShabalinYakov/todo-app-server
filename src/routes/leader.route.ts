import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import { leaderController } from '../controllers/leader.controller';
import checkLeader from '../middlewares/leader.middleware';

const leaderRouter = Router({ mergeParams: true });

leaderRouter.get('/subordinates', authMiddleware, checkLeader, leaderController.getSubordinates);

export default leaderRouter;
