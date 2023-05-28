import { Knex } from 'knex';
import { hash } from 'bcryptjs';

export const hashPassword = async (password: string) => {
  return await hash(password, 7);
};

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: '3573a016-e694-4e73-b37d-0405e2104487',
      first_name: 'Иван',
      middle_name: 'Иванович',
      last_name: 'Иванов',
      login: 'ivan_ivanov',
      password: await hashPassword('123qwerty'),
      is_leader: true,
    },
    {
      id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6',
      first_name: 'Пётр',
      middle_name: 'Петрович',
      last_name: 'Петров',
      login: 'petrov_petr',
      password: await hashPassword('123qwerty'),
      is_leader: false,
    },
    {
      id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7',
      first_name: 'Семён',
      middle_name: 'Семёнович',
      last_name: 'Семёнов',
      login: 'semen_semenov',
      password: await hashPassword('123qwerty'),
      is_leader: false,
    },
    {
      id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c',
      first_name: 'Сергей',
      middle_name: 'Сергеевич',
      last_name: 'Сергеев',
      login: 'segrey_sergeev',
      password: await hashPassword('123qwerty'),
      is_leader: false,
    },
    {
      id: 'cb8702f1-2b08-4217-ba8c-a885e034623c',
      first_name: 'Владимир',
      middle_name: 'Владимирович',
      last_name: 'Владимиров',
      login: 'vladimir_vladimirov',
      password: await hashPassword('123qwerty'),
      is_leader: true,
    },
  ]);
}
