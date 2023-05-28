import { compare } from 'bcryptjs';

import { LoginPayload } from '../interfaces/auth.interfaces';
import { User } from '../interfaces/user.interfaces';
import { tokenService } from './token.service';
import ApiError from '../exceptions/api-error';
import db from '../databases';

class AuthService {
  async login({ login, password }: LoginPayload) {
    const { rows: user } = await db.query(`SELECT * FROM users WHERE login = $1;`, [login]);
    if (!user[0]) throw ApiError.BadRequest('Пользователь не найден');

    const isPasswordMatching = await compare(password, user[0].password);
    if (!isPasswordMatching) throw ApiError.BadRequest('Неверный пароль');

    return this.createToken(user[0]);
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) throw new ApiError(500, 'Отсутствует токен');

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) throw new ApiError(500, 'Токен не валиден или не обнаружет в БД');
    if (userData.id !== tokenFromDb.user_id) throw new ApiError(500, 'Токен не принадлежит пользователю');

    const { rows: findUser } = await db.query(`SELECT * FROM users WHERE id = $1;`, [userData.id]);
    return await this.createToken(findUser[0]);
  }

  private async createToken(user: User) {
    const { id, login, first_name, middle_name, last_name, is_leader } = user;
    const tokens = tokenService.generateTokens({ id, login, is_leader });
    await tokenService.saveToken(id, tokens.refreshToken);

    return { ...tokens, user: { id, login, first_name, middle_name, last_name, is_leader } };
  }
}

export const authService = new AuthService();
