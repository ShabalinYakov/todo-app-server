import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from './src/config';

const dbConfig = {
  client: 'pg',
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    ssl: { rejectUnauthorized: false },
  },
  migrations: {
    directory: 'src/databases/migrations',
    tableName: 'migrations',
  },
  seeds: {
    directory: 'src/databases/seeds',
  },
};

export default dbConfig;
