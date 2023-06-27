import { NextFunction, Request, Response } from 'express';
declare class LeaderController {
    getTasksSubordinate(req: Request, res: Response, next: NextFunction): Promise<void>;
    getSubordinates(req: Request, res: Response, next: NextFunction): Promise<void>;
    createTask(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateTask(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const leaderController: LeaderController;
export {};
