import jwt from 'jsonwebtoken';
import db from '../databases';
import { TokenPayload, TokenData } from '../interfaces/auth.interfaces';
import { ACCESS_DURATION, ACCESS_SECRET_KEY, REFRESH_DURATION, REFRESH_SECRET_KEY } from '../config';

class TokenService {
  generateTokens(dataToken: TokenPayload): TokenData {
    const accessToken = jwt.sign(dataToken, ACCESS_SECRET_KEY, {
      expiresIn: ACCESS_DURATION,
    });

    const refreshToken = jwt.sign(dataToken, REFRESH_SECRET_KEY, {
      expiresIn: REFRESH_DURATION,
    });
    return { accessToken, refreshToken };
  }

  async saveToken(userId: string, refreshToken: string) {
    const { rows: tokenData } = await db.query(`SELECT * FROM tokens WHERE user_id = $1;`, [userId]);

    if (tokenData[0]) {
      const token = await db.query(`UPDATE tokens SET refresh_token = $1 WHERE user_id = $2;`, [refreshToken, userId]);
      return token.rows[0];
    }
    const token = await db.query(`INSERT INTO tokens (user_id, refresh_token) VALUES ($1, $2);`, [
      userId,
      refreshToken,
    ]);
    return token.rows[0];
  }

  validateAccessToken(accessToken: string) {
    try {
      return jwt.verify(accessToken, ACCESS_SECRET_KEY) as TokenPayload;
    } catch (error) {
      return null;
    }
  }
}

export const tokenService = new TokenService();
