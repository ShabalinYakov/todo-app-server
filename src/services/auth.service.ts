import { User } from '@/interfaces/user.interfaces';
import { tokenService } from './token.service';
import { UserDto } from '@/dtos/user.dto';
import { compare } from 'bcryptjs';
import db from '@databases';
import { LoginResponse } from '@/interfaces/auth.interface';
import HttpException from '@/exceptions/HttpException';

class AuthService {
  async login(userData: UserDto): Promise<LoginResponse> {
    const [findUser] = await db<User>('users').select().where({ login: userData.login });
    if (!findUser) return { error: { code: 102, message: 'Пользователя с таким логином не существует' } };

    const isPasswordMatching = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) return { error: { code: 103, message: 'Неверный пароль' } };

    return this.createToken(findUser);
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) throw new HttpException(500, 'Отсутствует токен');

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) throw new HttpException(500, 'Токен не валиден или не обнаружен в БД');
    if (userData.id !== tokenFromDb.user_id) throw new HttpException(500, 'Токен не принадлежит пользователю');

    const [findUser] = await db('users').select().where({ id: userData.id });

    return await this.createToken(findUser);
  }

  private async createToken(user: User) {
    const { id, login, first_name, middle_name, last_name, is_leader } = user;
    const tokens = tokenService.generateTokens({ id, login, is_leader });
    await tokenService.saveToken(id, tokens.refreshToken);

    return { ...tokens, user: { id, login, first_name, middle_name, last_name, is_leader }, error: null };
  }

  async logout(refreshToken: string) {
    const removedToken = await tokenService.removeToken(refreshToken);
    return removedToken;
  }
}

export const authService = new AuthService();
