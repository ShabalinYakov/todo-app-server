"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('tasks_statuses').del();
    // Inserts seed entries
    await knex('tasks_statuses').insert([
        { task_id: 'da3eb5ef-fa06-432b-be30-28f856159b52', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: '41c13d9d-696c-40ee-a2b0-8e4e1740f6d1', status_id: '161966aa-33a7-4f6d-8564-4394f5cfdb90' },
        { task_id: '69a7087f-ec4d-46d9-ba57-412fa1ab70f2', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: '5322b3a2-5a42-4291-82a6-2fd2d04dfa44', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: 'f30b3ec8-c698-460b-b323-94960245d305', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: '80a3d2e0-5f68-4916-a2c4-d7fc43a960ad', status_id: '161966aa-33a7-4f6d-8564-4394f5cfdb90' },
        { task_id: 'c904c8df-d9d8-4018-962e-ec3f9a5a9a21', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: 'dd3e1bc4-ca9f-4203-b612-96e0a0f23d6e', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: '3906218a-4d44-4d95-85f2-f4a2d6837bfc', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: '8b624ed7-1ca9-4331-b731-9d89aca593ca', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: 'bd42e532-cc24-42f0-a899-ae8eacf390c3', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: '38db566d-8eaa-4539-adec-222537df2c33', status_id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97' },
        { task_id: '32f7814e-6a7b-46b7-839f-1d8617c7d944', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '408e2e4c-a6db-4f56-87a1-4c498245241f', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '8d1023ee-cc06-4035-9978-e6e34850f833', status_id: '161966aa-33a7-4f6d-8564-4394f5cfdb90' },
        { task_id: '7a2a7256-a8b9-4eca-ab34-be490fb2762f', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '194765e0-dff6-4e35-998a-793eae34df49', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '1dc29bf1-d510-4538-b856-65829d5e5464', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: 'dd8b06c9-00e3-4f13-95cb-a24d63200342', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: 'b7d9b330-36f4-4978-8f02-560b30d6cf53', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: 'e33de17e-e738-4f54-b4e1-8d4ba3b81102', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '8d97a2b5-2075-4166-b694-6f778504279a', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: 'a2d7bca8-9eec-460c-82c4-2907748ab748', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: 'd2a001af-fc19-48a9-9458-98665dfd14e5', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '45950426-7d08-400d-ae57-a6ac736e4377', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '2279acd6-c169-47d5-ac6f-7f878d835fe0', status_id: '161966aa-33a7-4f6d-8564-4394f5cfdb90' },
        { task_id: '33ac08a8-612e-45d4-a01c-78ce017ef9c1', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '9e6ee86d-59a4-495d-a7a3-ab1e4b29d764', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: 'a14ac709-6227-4bec-bf8f-40fcf44e088b', status_id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6' },
        { task_id: '07162e7e-382f-4feb-a21f-271c48d43f85', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: '0397afac-8ec1-4e3f-bc02-3c6e7c3bd6ff', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: 'ac4f1301-1736-47ad-b16a-5d1234a4bd79', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: '35f8b751-bd02-41cc-b5cc-b9def3e84808', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: '4bd04060-d209-4d32-9af7-5baf1e2e5637', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: '9936b787-ee63-420e-a0cf-734714bd5e01', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: 'd717a702-bbd1-4bff-815f-5cc06088c029', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: '674e5d60-bdc5-4bf9-a49c-9e4e92ffdb24', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: 'b67af9d6-ed82-4da8-a230-4f3d2baa95f1', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: 'e2abf517-f925-479b-896d-f1723f84a209', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: '613da7b6-6fdc-4e1a-83e3-e6a5627a8f7c', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: 'abd7921f-becc-4d4f-8bfb-e9406c8200df', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: 'a5548fef-6b7d-4f04-b73c-69f9bcf68ab3', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: '501d159d-2263-4d7f-ab83-d161864377a7', status_id: '71c56449-07c3-4c8a-824d-a7b519a2aa99' },
        { task_id: '92945ed1-e73b-41e4-8e16-db1adcbe4c62', status_id: '161966aa-33a7-4f6d-8564-4394f5cfdb90' },
        { task_id: 'a20be12e-35f9-4d74-b447-5f55267c159c', status_id: '161966aa-33a7-4f6d-8564-4394f5cfdb90' },
    ]);
}
exports.seed = seed;
//# sourceMappingURL=06_tasks_statuses.js.map