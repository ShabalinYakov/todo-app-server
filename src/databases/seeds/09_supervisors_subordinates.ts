import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('supervisors_subordinates').del();

  // Inserts seed entries
  await knex('supervisors_subordinates').insert([
    { supervisor: '3573a016-e694-4e73-b37d-0405e2104487', subordinate: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6' },
    { supervisor: '3573a016-e694-4e73-b37d-0405e2104487', subordinate: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7' },
    { supervisor: '3573a016-e694-4e73-b37d-0405e2104487', subordinate: '00a1c36d-dcc9-48da-8fa5-4a49403a398c' },
    { supervisor: '3573a016-e694-4e73-b37d-0405e2104487', subordinate: 'cb8702f1-2b08-4217-ba8c-a885e034623c' },
    { supervisor: 'cb8702f1-2b08-4217-ba8c-a885e034623c', subordinate: '00a1c36d-dcc9-48da-8fa5-4a49403a398c' },
    { supervisor: 'cb8702f1-2b08-4217-ba8c-a885e034623c', subordinate: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6' },
  ]);
}
