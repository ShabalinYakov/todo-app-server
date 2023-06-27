import { Request, Response, NextFunction } from 'express';
declare const checkLeader: (req: Request, res: Response, next: NextFunction) => void;
export default checkLeader;
