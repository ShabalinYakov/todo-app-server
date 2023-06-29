import { tasksController } from '../controllers/tasks.controller';
import checkCreator from '../middlewares/creator.middleware';
import authMiddleware from '../middlewares/auth.middleware';
import checkLeader from '@/middlewares/leader.middleware';
import { Router } from 'express';
import validationMiddleware from '@/middlewares/validation.middleware';
import { TaskDto } from '@/dtos/task.dto';
import { TitleDto } from '@/dtos/title.dto';
import { StatusDto } from '@/dtos/status.dto';
import { DeadlineDto } from '@/dtos/deadline.dto';
import { PriorityDto } from '@/dtos/priority.dto';
import { DescriptionDto } from '@/dtos/description.dto';
import { ResponsibleDto } from '@/dtos/responsible.dto';
import { SubordinateDto } from '@/dtos/subordinate.dto';

const tasksRouter = Router({ mergeParams: true });

tasksRouter.get('/', authMiddleware, tasksController.getTasks);
tasksRouter.post('/', authMiddleware, validationMiddleware(TaskDto, 'body'), tasksController.createTask);
tasksRouter.patch(
  '/title',
  authMiddleware,
  validationMiddleware(TitleDto, 'body'),
  checkCreator,
  tasksController.updateTitle,
);
tasksRouter.patch(
  '/status',
  authMiddleware,
  validationMiddleware(StatusDto, 'body'),
  checkCreator,
  tasksController.updateStatus,
);
tasksRouter.patch(
  '/deadline',
  authMiddleware,
  validationMiddleware(DeadlineDto, 'body'),
  checkCreator,
  tasksController.updateDeadline,
);
tasksRouter.patch(
  '/priority',
  authMiddleware,
  validationMiddleware(PriorityDto, 'body'),
  checkCreator,
  tasksController.updatePriority,
);
tasksRouter.patch(
  '/description',
  authMiddleware,
  validationMiddleware(DescriptionDto, 'body'),
  checkCreator,
  tasksController.updateDescription,
);
tasksRouter.patch(
  '/responsible',
  authMiddleware,
  validationMiddleware(ResponsibleDto, 'body'),
  checkLeader,
  tasksController.updateResponsible,
);
tasksRouter.get(
  '/subordinate/:subordinate_id',
  authMiddleware,
  validationMiddleware(SubordinateDto, 'params'),
  checkLeader,
  tasksController.getTasksSubordinate,
);

export default tasksRouter;
