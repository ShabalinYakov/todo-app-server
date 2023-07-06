import { Router } from 'express';
import { tasksController } from '@controllers/tasks.controller';

import checkResponsibleOrLeader from '@/middlewares/responsible.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import checkCreator from '@middlewares/creator.middleware';
import authMiddleware from '@middlewares/auth.middleware';
import checkLeader from '@/middlewares/leader.middleware';

import { SubordinateDto } from '@/dtos/subordinate.dto';
import { ResponsibleDto } from '@/dtos/responsible.dto';
import { DescriptionDto } from '@/dtos/description.dto';
import { PriorityDto } from '@/dtos/priority.dto';
import { DeadlineDto } from '@/dtos/deadline.dto';
import { StatusDto } from '@/dtos/status.dto';
import { TitleDto } from '@/dtos/title.dto';
import { TaskDto } from '@/dtos/task.dto';

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
  checkResponsibleOrLeader,
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
  checkLeader,
  validationMiddleware(ResponsibleDto, 'body'),
  tasksController.updateResponsible,
);
tasksRouter.get(
  '/subordinate/:subordinate_id',
  authMiddleware,
  checkLeader,
  validationMiddleware(SubordinateDto, 'params'),
  tasksController.getTasksSubordinate,
);

export default tasksRouter;
