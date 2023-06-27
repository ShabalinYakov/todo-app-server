import { NextFunction, Request, Response } from 'express';
declare class AuthController {
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
    refresh(req: Request, res: Response, next: NextFunction): Promise<void>;
    logout(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const authController: AuthController;
export {};
