import { Knex } from 'knex';
export declare const hashPassword: (password: string) => Promise<string>;
export declare function seed(knex: Knex): Promise<void>;
