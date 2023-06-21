import { Router } from 'express';

import { tasksController } from '../controllers/tasks.controller';
import authMiddleware from '../middlewares/auth.middleware';

const tasksRouter = Router({ mergeParams: true });

tasksRouter.get('/', authMiddleware, tasksController.viewerAllTasks);

export default tasksRouter;
