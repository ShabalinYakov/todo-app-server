**Express, Postgres, Knex**

`git clone https://github.com/ShabalinYakov/todo-app-server.git`

- выполните установку зависимостей `yarn или npm install`

|    запуск в development    |      запуск в production       |
| :------------------------: | :----------------------------: |
| `yarn dev или npm run dev` | `yarn start или npm run start` |

<details>
<summary>Работа с миграциями</summary>

- создание миграций `yarn make:migration или npm run make:migration`

- создание seed `yarn make:seeder или npm run make:seeder`

  <br/>
<summary>Запуск migration/seed</summary>

|                development                 |             production             |
| :----------------------------------------: | :--------------------------------: |
| `yarn dev:migrate или npm run dev:migrate` | `yarn migrate или npm run migrate` |
|    `yarn dev:seed или npm run dev:seed`    |    `yarn seed или npm run seed`    |

  <br/>
<summary>Откат миграции</summary>

|                 development                  |              production              |
| :------------------------------------------: | :----------------------------------: |
| `yarn dev:rollback или npm run dev:rollback` | `yarn rollback или npm run rollback` |

</details>
