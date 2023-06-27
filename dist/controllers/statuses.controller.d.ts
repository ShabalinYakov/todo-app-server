import { NextFunction, Request, Response } from 'express';
declare class StatusesController {
    getStatuses(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const statusesController: StatusesController;
export {};
