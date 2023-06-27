"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = exports.hashPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const hashPassword = async (password) => {
    return await (0, bcryptjs_1.hash)(password, 7);
};
exports.hashPassword = hashPassword;
async function seed(knex) {
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
            password: await (0, exports.hashPassword)('123qwerty'),
            is_leader: true,
        },
        {
            id: 'feb1cd3d-6584-4c3b-8041-23e2bcf603d6',
            first_name: 'Пётр',
            middle_name: 'Петрович',
            last_name: 'Петров',
            login: 'petrov_petr',
            password: await (0, exports.hashPassword)('123qwerty'),
            is_leader: false,
        },
        {
            id: '2175cdeb-59ce-4c0c-a11f-e692e1a70ef7',
            first_name: 'Семён',
            middle_name: 'Семёнович',
            last_name: 'Семёнов',
            login: 'semen_semenov',
            password: await (0, exports.hashPassword)('123qwerty'),
            is_leader: false,
        },
        {
            id: '00a1c36d-dcc9-48da-8fa5-4a49403a398c',
            first_name: 'Сергей',
            middle_name: 'Сергеевич',
            last_name: 'Сергеев',
            login: 'segrey_sergeev',
            password: await (0, exports.hashPassword)('123qwerty'),
            is_leader: false,
        },
        {
            id: 'cb8702f1-2b08-4217-ba8c-a885e034623c',
            first_name: 'Владимир',
            middle_name: 'Владимирович',
            last_name: 'Владимиров',
            login: 'vladimir_vladimirov',
            password: await (0, exports.hashPassword)('123qwerty'),
            is_leader: true,
        },
    ]);
}
exports.seed = seed;
//# sourceMappingURL=01_users.js.map