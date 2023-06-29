import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import { prioritiesController } from '../controllers/priorities.controller';

const prioritiesRouter = Router({ mergeParams: true });

prioritiesRouter.get('/', authMiddleware, prioritiesController.getPriorities);

export default prioritiesRouter;
