"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('responsibles_tasks').del();
    // Inserts seed entries
    await knex('responsibles_tasks').insert([
        // Иван
        { user_id: '3573a016-e694-4e73-b37d-0405e2104487', task_id: 'da3eb5ef-fa06-432b-be30-28f856159b52' },
        { user_id: '3573a016-e694-4e73-b37d-0405e2104487', task_id: '41c13d9d-696c-40ee-a2b0-8e4e1740f6d1' },
        { user_id: '3573a016-e694-4e73-b37d-0405e2104487', task_id: '69a7087f-ec4d-46d9-ba57-412fa1ab70f2' },
        { user_id: '3573a016-e694-4e73-b37d-0405e2104487', task_id: '5322b3a2-5a42-4291-82a6-2fd2d04dfa44' },
        { user_id: '3573a016-e694-4e73-b37d-0405e2104487', task_id: 'f30b3ec8-c698-460b-b323-94960245d305' },
        { user_id: '3573a016-e694-4e73-b37d-0405e2104487', task_id: '80a3d2e0-5f68-4916-a2c4-d7fc43a960ad' },
        //Пётр
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: '8d97a2b5-2075-4166-b694-6f778504279a' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: 'a2d7bca8-9eec-460c-82c4-2907748ab748' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: 'd2a001af-fc19-48a9-9458-98665dfd14e5' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: '45950426-7d08-400d-ae57-a6ac736e4377' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: '2279acd6-c169-47d5-ac6f-7f878d835fe0' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: '33ac08a8-612e-45d4-a01c-78ce017ef9c1' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: 'a14ac709-6227-4bec-bf8f-40fcf44e088b' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: '07162e7e-382f-4feb-a21f-271c48d43f85' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: '0397afac-8ec1-4e3f-bc02-3c6e7c3bd6ff' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: '613da7b6-6fdc-4e1a-83e3-e6a5627a8f7c' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: 'abd7921f-becc-4d4f-8bfb-e9406c8200df' },
        { user_id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6', task_id: 'a5548fef-6b7d-4f04-b73c-69f9bcf68ab3' },
        //Семён
        { user_id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7', task_id: 'ac4f1301-1736-47ad-b16a-5d1234a4bd79' },
        { user_id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7', task_id: '35f8b751-bd02-41cc-b5cc-b9def3e84808' },
        { user_id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7', task_id: '4bd04060-d209-4d32-9af7-5baf1e2e5637' },
        { user_id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7', task_id: '9936b787-ee63-420e-a0cf-734714bd5e01' },
        { user_id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7', task_id: 'd717a702-bbd1-4bff-815f-5cc06088c029' },
        { user_id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7', task_id: '674e5d60-bdc5-4bf9-a49c-9e4e92ffdb24' },
        { user_id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7', task_id: 'b67af9d6-ed82-4da8-a230-4f3d2baa95f1' },
        { user_id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7', task_id: 'e2abf517-f925-479b-896d-f1723f84a209' },
        //Сергей
        { user_id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c', task_id: '194765e0-dff6-4e35-998a-793eae34df49' },
        { user_id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c', task_id: '1dc29bf1-d510-4538-b856-65829d5e5464' },
        { user_id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c', task_id: 'dd8b06c9-00e3-4f13-95cb-a24d63200342' },
        { user_id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c', task_id: 'b7d9b330-36f4-4978-8f02-560b30d6cf53' },
        { user_id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c', task_id: 'e33de17e-e738-4f54-b4e1-8d4ba3b81102' },
        { user_id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c', task_id: '501d159d-2263-4d7f-ab83-d161864377a7' },
        { user_id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c', task_id: '92945ed1-e73b-41e4-8e16-db1adcbe4c62' },
        { user_id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c', task_id: 'a20be12e-35f9-4d74-b447-5f55267c159c' },
        //Владимир
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: 'c904c8df-d9d8-4018-962e-ec3f9a5a9a21' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: 'dd3e1bc4-ca9f-4203-b612-96e0a0f23d6e' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: '3906218a-4d44-4d95-85f2-f4a2d6837bfc' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: '8b624ed7-1ca9-4331-b731-9d89aca593ca' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: 'bd42e532-cc24-42f0-a899-ae8eacf390c3' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: '38db566d-8eaa-4539-adec-222537df2c33' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: '32f7814e-6a7b-46b7-839f-1d8617c7d944' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: '408e2e4c-a6db-4f56-87a1-4c498245241f' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: '8d1023ee-cc06-4035-9978-e6e34850f833' },
        { user_id: 'cb8702f1-2b08-4217-ba8c-a885e034623c', task_id: '7a2a7256-a8b9-4eca-ab34-be490fb2762f' },
    ]);
}
exports.seed = seed;
//# sourceMappingURL=08_responsibles_tasks.js.map