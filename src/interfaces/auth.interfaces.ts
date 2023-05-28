export interface LoginPayload {
  login: string;
  password: string;
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
