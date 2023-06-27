import { Request, Response, NextFunction } from 'express';
declare const checkResponsible: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default checkResponsible;
