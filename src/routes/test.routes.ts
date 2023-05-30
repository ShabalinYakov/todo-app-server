import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';

const testRoute = Router({ mergeParams: true });

testRoute.get('/', authMiddleware, (req, res) => {
  res.status(200).send({ message: 'Test' });
});
export default testRoute;
