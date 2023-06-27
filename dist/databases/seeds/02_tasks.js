"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const addDate = (amountOfDay) => {
    const currentDate = new Date();
    if (!amountOfDay)
        return currentDate.toISOString();
    currentDate.setDate(currentDate.getDate() + amountOfDay);
    return currentDate.toISOString();
};
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('tasks').del();
    // Inserts seed entries
    await knex('tasks').insert([
        {
            id: 'da3eb5ef-fa06-432b-be30-28f856159b52',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(1),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: '69a7087f-ec4d-46d9-ba57-412fa1ab70f2',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(25),
            created_at: '2023-04-23',
            updated_at: '2023-04-26',
        },
        {
            id: '5322b3a2-5a42-4291-82a6-2fd2d04dfa44',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(3),
            created_at: '2023-04-23',
            updated_at: '2023-04-26',
        },
        {
            id: 'f30b3ec8-c698-460b-b323-94960245d305',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(5),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: 'c904c8df-d9d8-4018-962e-ec3f9a5a9a21',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(4),
            created_at: '2023-04-23',
            updated_at: '2023-04-26',
        },
        {
            id: 'dd3e1bc4-ca9f-4203-b612-96e0a0f23d6e',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(5),
            created_at: '2023-04-23',
            updated_at: '2023-04-27',
        },
        {
            id: '3906218a-4d44-4d95-85f2-f4a2d6837bfc',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(20),
            created_at: '2023-04-23',
            updated_at: '2023-04-28',
        },
        {
            id: '8b624ed7-1ca9-4331-b731-9d89aca593ca',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(14),
            created_at: '2023-04-23',
            updated_at: '2023-04-23',
        },
        {
            id: 'bd42e532-cc24-42f0-a899-ae8eacf390c3',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(10),
            created_at: '2023-04-23',
            updated_at: '2023-04-24',
        },
        {
            id: '38db566d-8eaa-4539-adec-222537df2c33',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(3),
            created_at: '2023-04-23',
            updated_at: '2023-04-24',
        },
        {
            id: '32f7814e-6a7b-46b7-839f-1d8617c7d944',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(1),
            created_at: '2023-04-23',
            updated_at: '2023-04-28',
        },
        {
            id: '408e2e4c-a6db-4f56-87a1-4c498245241f',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(2),
            created_at: '2023-04-23',
            updated_at: '2023-04-28',
        },
        {
            id: '7a2a7256-a8b9-4eca-ab34-be490fb2762f',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(4),
            created_at: '2023-04-23',
            updated_at: '2023-04-29',
        },
        {
            id: '194765e0-dff6-4e35-998a-793eae34df49',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(2),
            created_at: '2023-04-23',
            updated_at: '2023-04-29',
        },
        {
            id: '1dc29bf1-d510-4538-b856-65829d5e5464',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(4),
            created_at: '2023-04-23',
            updated_at: '2023-04-30',
        },
        {
            id: 'dd8b06c9-00e3-4f13-95cb-a24d63200342',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(11),
            created_at: '2023-04-23',
            updated_at: '2023-04-30',
        },
        {
            id: 'b7d9b330-36f4-4978-8f02-560b30d6cf53',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(23),
            created_at: '2023-04-23',
            updated_at: '2023-04-24',
        },
        {
            id: 'e33de17e-e738-4f54-b4e1-8d4ba3b81102',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(1),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: '8d97a2b5-2075-4166-b694-6f778504279a',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(5),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: 'a2d7bca8-9eec-460c-82c4-2907748ab748',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(11),
            created_at: '2023-04-23',
            updated_at: '2023-04-26',
        },
        {
            id: 'd2a001af-fc19-48a9-9458-98665dfd14e5',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(16),
            created_at: '2023-04-23',
            updated_at: '2023-04-27',
        },
        {
            id: '45950426-7d08-400d-ae57-a6ac736e4377',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(4),
            created_at: '2023-04-23',
            updated_at: '2023-04-28',
        },
        {
            id: '33ac08a8-612e-45d4-a01c-78ce017ef9c1',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(),
            created_at: '2023-04-23',
            updated_at: '2023-04-27',
        },
        {
            id: '9e6ee86d-59a4-495d-a7a3-ab1e4b29d764',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(),
            created_at: '2023-04-23',
            updated_at: '2023-04-26',
        },
        {
            id: 'a14ac709-6227-4bec-bf8f-40fcf44e088b',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(1),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: '07162e7e-382f-4feb-a21f-271c48d43f85',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-24',
        },
        {
            id: '0397afac-8ec1-4e3f-bc02-3c6e7c3bd6ff',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-28',
        },
        {
            id: 'ac4f1301-1736-47ad-b16a-5d1234a4bd79',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: '35f8b751-bd02-41cc-b5cc-b9def3e84808',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-24',
        },
        {
            id: '4bd04060-d209-4d32-9af7-5baf1e2e5637',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: '9936b787-ee63-420e-a0cf-734714bd5e01',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-23',
        },
        {
            id: 'd717a702-bbd1-4bff-815f-5cc06088c029',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: '674e5d60-bdc5-4bf9-a49c-9e4e92ffdb24',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-26',
        },
        {
            id: 'b67af9d6-ed82-4da8-a230-4f3d2baa95f1',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-27',
        },
        {
            id: 'e2abf517-f925-479b-896d-f1723f84a209',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-28',
        },
        {
            id: '613da7b6-6fdc-4e1a-83e3-e6a5627a8f7c',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-29',
        },
        {
            id: 'abd7921f-becc-4d4f-8bfb-e9406c8200df',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-27',
        },
        {
            id: 'a5548fef-6b7d-4f04-b73c-69f9bcf68ab3',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-26',
        },
        {
            id: '501d159d-2263-4d7f-ab83-d161864377a7',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-1),
            created_at: '2023-04-23',
            updated_at: '2023-04-25',
        },
        {
            id: '8d1023ee-cc06-4035-9978-e6e34850f833',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-2),
            created_at: '2023-03-23',
            updated_at: '2023-03-27',
        },
        {
            id: '80a3d2e0-5f68-4916-a2c4-d7fc43a960ad',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-2),
            created_at: '2023-03-03',
            updated_at: '2023-03-03',
        },
        {
            id: '2279acd6-c169-47d5-ac6f-7f878d835fe0',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-2),
            created_at: '2023-04-14',
            updated_at: '2023-04-16',
        },
        {
            id: '41c13d9d-696c-40ee-a2b0-8e4e1740f6d1',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-2),
            created_at: '2023-02-03',
            updated_at: '2023-02-03',
        },
        {
            id: '92945ed1-e73b-41e4-8e16-db1adcbe4c62',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-2),
            created_at: '2023-04-21',
            updated_at: '2023-04-21',
        },
        {
            id: 'a20be12e-35f9-4d74-b447-5f55267c159c',
            title: 'Задача 1',
            description: 'выполнить задачу',
            deadline: addDate(-2),
            created_at: '2023-04-22',
            updated_at: '2023-04-23',
        },
    ]);
}
exports.seed = seed;
//# sourceMappingURL=02_tasks.js.map