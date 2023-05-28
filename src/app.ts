import cookieParser from 'cookie-parser';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import hpp from 'hpp';

import errorMiddleware from './middlewares/error.middleware';
import { CREDENTIALS, LOG_FORMAT, ORIGIN } from './config';
import { stream } from './utils/logger';
import router from './routes';

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
export default app;
