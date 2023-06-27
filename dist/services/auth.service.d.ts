import { LoginPayload } from '../interfaces/auth.interfaces';
declare class AuthService {
    login({ login, password }: LoginPayload): Promise<{
        user: {
            id: string;
            login: string;
            first_name: string;
            middle_name: string;
            last_name: string;
            is_leader: boolean;
        };
        error: any;
        refreshToken: string;
        accessToken: string;
    } | {
        error: {
            code: number;
            message: string;
        };
    }>;
    refresh(refreshToken: string): Promise<{
        user: {
            id: string;
            login: string;
            first_name: string;
            middle_name: string;
            last_name: string;
            is_leader: boolean;
        };
        error: any;
        refreshToken: string;
        accessToken: string;
    }>;
    private createToken;
    logout(refreshToken: string): Promise<any>;
}
export declare const authService: AuthService;
export {};
