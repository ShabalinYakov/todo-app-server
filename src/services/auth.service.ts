import { compare } from 'bcryptjs';

import { LoginPayload } from '../interfaces/auth.interfaces';
import ApiErrors from '../exceptions/api-error';
import { tokenService } from './token.service';
import db from '../databases';

class AuthService {
  async login({ login, password }: LoginPayload) {
    const { rows: user } = await db.query(`SELECT * FROM users WHERE login = $1;`, [login]);
    if (!user[0]) throw ApiErrors.BadRequest('Пользователь не найден');

    const isPasswordMatching = await compare(password, user[0].password);
    if (!isPasswordMatching) throw ApiErrors.BadRequest('Неверный пароль');

    const { id, is_leader } = user[0];
    const tokens = tokenService.generateTokens({ id, login, is_leader });
    await tokenService.saveToken(id, tokens.refreshToken);

    return {
      ...tokens,
      user: {
        id: user[0].id,
        login: user[0].login,
        is_leader: user[0].is_leader,
        first_name: user[0].first_name,
        middle_name: user[0].middle_name,
        last_name: user[0].last_name,
      },
    };
  }
}

export const authService = new AuthService();
