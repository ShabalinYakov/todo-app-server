import { Request, Response, NextFunction } from 'express';
declare const checkCreator: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default checkCreator;
