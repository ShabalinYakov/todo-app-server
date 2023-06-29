import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import { statusesController } from '../controllers/statuses.controller';

const statusesRouter = Router({ mergeParams: true });

statusesRouter.get('/', authMiddleware, statusesController.getStatuses);

export default statusesRouter;
