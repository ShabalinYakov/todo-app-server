import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  NODE_ENV,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  ACCESS_DURATION,
  REFRESH_DURATION,
  ACCESS_SECRET_KEY,
  REFRESH_SECRET_KEY,
  ORIGIN,
} = process.env;
