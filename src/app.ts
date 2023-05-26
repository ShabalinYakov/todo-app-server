import cookieParser from 'cookie-parser';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { CREDENTIALS, ORIGIN } from './config';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
app.use(helmet());
app.use('/api', router);

export default app;
