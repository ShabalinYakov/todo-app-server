import cookieParser from 'cookie-parser';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { join } from 'path';
import hpp from 'hpp';

import errorMiddleware from '@middlewares/error.middleware';
import { CREDENTIALS, LOG_FORMAT, ORIGIN } from '@config';
import { stream } from '@utils/logger';
import router from '@routes/index';

const app = express();

app.use(express.json());
app.use(morgan(LOG_FORMAT, { stream }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
app.use(hpp());
app.use(helmet());
app.use('/api', router);
app.use(errorMiddleware);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(join(__dirname, 'client')));

  const indexPath = join(__dirname, 'client', 'index.html');

  app.get('*', (req, res) => {
    res.sendFile(indexPath);
  });
}

export default app;
