import { Router } from 'express';

const router = Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.send({ message: 'OK' });
});

export default router;
