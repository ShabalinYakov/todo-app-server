declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;

    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;

    ACCESS_DURATION: string;
    REFRESH_DURATION: string;
    ACCESS_SECRET_KEY: string;
    REFRESH_SECRET_KEY: string;

    ORIGIN: string;
    CREDENTIALS: string;

    LOG_DIR: string;
    LOG_FORMAT: string;

    MAX_AGE_COOKIE: number;
  }
}
