import { Request } from 'express';
import { User } from './user.interfaces';

export interface LoginResponse {
  user?: Pick<User, 'id' | 'login' | 'first_name' | 'middle_name' | 'last_name' | 'is_leader'>;
  error?: {
    code: number;
    message: string;
  };
  refreshToken?: string;
  accessToken?: string;
}

export interface TokenPayload {
  id: string;
  login: string;
  is_leader: boolean;
}

export interface TokenData {
  refreshToken: string;
  accessToken: string;
}

export interface RequestWithUser extends Request {
  user: TokenPayload;
}
