import { Router } from 'express';

import { tasksController } from '../controllers/tasks.controller';
import checkCreator from '../middlewares/creator.middleware';
import authMiddleware from '../middlewares/auth.middleware';

const tasksRouter = Router({ mergeParams: true });

tasksRouter.get('/', authMiddleware, tasksController.viewerAllTasks);
tasksRouter.post('/', authMiddleware, tasksController.createTask);
tasksRouter.patch('/title', authMiddleware, checkCreator, tasksController.updateStatus);
tasksRouter.patch('/description', authMiddleware, checkCreator, tasksController.updateStatus);
tasksRouter.patch('/deadline', authMiddleware, checkCreator, tasksController.updateStatus);
tasksRouter.patch('/priority', authMiddleware, checkCreator, tasksController.updateStatus);
tasksRouter.patch('/status', authMiddleware, tasksController.updateStatus);

export default tasksRouter;
