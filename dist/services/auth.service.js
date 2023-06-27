"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const tslib_1 = require("tslib");
const bcryptjs_1 = require("bcryptjs");
const token_service_1 = require("./token.service");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const databases_1 = tslib_1.__importDefault(require("../databases"));
class AuthService {
    async login({ login, password }) {
        const { rows: user } = await databases_1.default.query(`SELECT * FROM users WHERE login = $1;`, [login]);
        if (!user[0])
            return { error: { code: 102, message: 'Пользователя с таким логином не существует' } };
        const isPasswordMatching = await (0, bcryptjs_1.compare)(password, user[0].password);
        if (!isPasswordMatching)
            return { error: { code: 103, message: 'Неверный пароль' } };
        return this.createToken(user[0]);
    }
    async refresh(refreshToken) {
        if (!refreshToken)
            throw new HttpException_1.default(500, 'Отсутствует токен');
        const userData = token_service_1.tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await token_service_1.tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb)
            throw new HttpException_1.default(500, 'Токен не валиден или не обнаружен в БД');
        if (userData.id !== tokenFromDb.user_id)
            throw new HttpException_1.default(500, 'Токен не принадлежит пользователю');
        const { rows: findUser } = await databases_1.default.query(`SELECT * FROM users WHERE id = $1;`, [userData.id]);
        return await this.createToken(findUser[0]);
    }
    async createToken(user) {
        const { id, login, first_name, middle_name, last_name, is_leader } = user;
        const tokens = token_service_1.tokenService.generateTokens({ id, login, is_leader });
        await token_service_1.tokenService.saveToken(id, tokens.refreshToken);
        return Object.assign(Object.assign({}, tokens), { user: { id, login, first_name, middle_name, last_name, is_leader }, error: null });
    }
    async logout(refreshToken) {
        const removedToken = await token_service_1.tokenService.removeToken(refreshToken);
        return removedToken;
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=auth.service.js.map