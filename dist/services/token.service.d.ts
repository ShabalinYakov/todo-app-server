import { TokenPayload, TokenData } from '../interfaces/auth.interfaces';
declare class TokenService {
    generateTokens(dataToken: TokenPayload): TokenData;
    saveToken(userId: string, refreshToken: string): Promise<any>;
    validateAccessToken(accessToken: string): TokenPayload;
    validateRefreshToken(refreshToken: string): TokenPayload;
    findToken(refreshToken: string): Promise<any>;
    removeToken(refreshToken: string): Promise<any>;
}
export declare const tokenService: TokenService;
export {};
