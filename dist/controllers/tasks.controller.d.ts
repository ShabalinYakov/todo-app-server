import { NextFunction, Request, Response } from 'express';
declare class TasksController {
    viewerAllTasks(req: Request, res: Response, next: NextFunction): Promise<void>;
    createTask(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateTitle(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateDescription(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateDeadline(req: Request, res: Response, next: NextFunction): Promise<void>;
    updatePriority(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const tasksController: TasksController;
export {};
