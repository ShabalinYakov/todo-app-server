"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex('statuses').del();
    // Inserts seed entries
    await knex('statuses').insert([
        { id: 'f07a90c3-af5e-4b5e-ad3e-b450dbcf8c97', name: 'к выполнению' },
        { id: '5e81ccc9-1d98-4a0b-b027-407487bd8bb6', name: 'выполняется' },
        { id: '71c56449-07c3-4c8a-824d-a7b519a2aa99', name: 'выполнена' },
        { id: '161966aa-33a7-4f6d-8564-4394f5cfdb90', name: 'отменена' },
    ]);
}
exports.seed = seed;
//# sourceMappingURL=04_statuses.js.map