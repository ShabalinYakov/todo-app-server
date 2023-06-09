import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('priorities').del();

  // Inserts seed entries
  await knex('priorities').insert([
    { id: '616f39d8-c61a-4388-87c6-5fe93f7f79ee', name: 'высокий' },
    { id: '5387f116-b123-48e1-9479-caa7325aec74', name: 'средний' },
    { id: '591aa71e-bd0b-4b24-b509-b1fe47eabb55', name: 'низкий' },
  ]);
}
