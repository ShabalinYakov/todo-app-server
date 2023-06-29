import jwt from 'jsonwebtoken';
import db from '../databases';
import { TokenPayload, TokenData } from '../interfaces/auth.interface';
import { ACCESS_DURATION, ACCESS_SECRET_KEY, REFRESH_DURATION, REFRESH_SECRET_KEY } from '../config';

class TokenService {
  generateTokens(toketData: TokenPayload): TokenData {
    const accessToken = jwt.sign(toketData, ACCESS_SECRET_KEY, {
      expiresIn: ACCESS_DURATION,
    });
    const refreshToken = jwt.sign(toketData, REFRESH_SECRET_KEY, {
      expiresIn: REFRESH_DURATION,
    });

    return { accessToken, refreshToken };
  }

  async saveToken(user_id: string, refresh_token: string) {
    const [tokenData] = await db('tokens').select().where({ user_id });

    if (tokenData) {
      await db('tokens').where({ user_id }).update({ refresh_token });
      return;
    }

    await db('tokens').insert({ user_id, refresh_token });
    return;
  }

  validateAccessToken(accessToken: string) {
    try {
      return jwt.verify(accessToken, ACCESS_SECRET_KEY) as TokenPayload;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(refreshToken: string) {
    try {
      return jwt.verify(refreshToken, REFRESH_SECRET_KEY) as TokenPayload;
    } catch (error) {
      return null;
    }
  }

  async findToken(refresh_token: string) {
    const [token] = await db('tokens').select().where({ refresh_token });
    return token;
  }

  async removeToken(refresh_token: string) {
    return await db('tokens').where({ refresh_token }).del().returning('refresh_token');
  }
}

export const tokenService = new TokenService();
