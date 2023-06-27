import { NextFunction, Request, Response } from 'express';
declare class PrioritiesController {
    getPriorities(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const prioritiesController: PrioritiesController;
export {};
