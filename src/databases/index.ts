import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../config';
import { Pool } from 'pg';

const localPoolConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : localPoolConfig;

const db = new Pool(poolConfig);
export default db;
