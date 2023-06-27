"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const databases_1 = tslib_1.__importDefault(require("../databases"));
const config_1 = require("../config");
class TokenService {
    generateTokens(dataToken) {
        const accessToken = jsonwebtoken_1.default.sign(dataToken, config_1.ACCESS_SECRET_KEY, {
            expiresIn: config_1.ACCESS_DURATION,
        });
        const refreshToken = jsonwebtoken_1.default.sign(dataToken, config_1.REFRESH_SECRET_KEY, {
            expiresIn: config_1.REFRESH_DURATION,
        });
        return { accessToken, refreshToken };
    }
    async saveToken(userId, refreshToken) {
        const { rows: tokenData } = await databases_1.default.query(`SELECT * FROM tokens WHERE user_id = $1;`, [userId]);
        if (tokenData[0]) {
            const token = await databases_1.default.query(`UPDATE tokens SET refresh_token = $1 WHERE user_id = $2;`, [refreshToken, userId]);
            return token.rows[0];
        }
        const token = await databases_1.default.query(`INSERT INTO tokens (user_id, refresh_token) VALUES ($1, $2);`, [
            userId,
            refreshToken,
        ]);
        return token.rows[0];
    }
    validateAccessToken(accessToken) {
        try {
            return jsonwebtoken_1.default.verify(accessToken, config_1.ACCESS_SECRET_KEY);
        }
        catch (error) {
            return null;
        }
    }
    validateRefreshToken(refreshToken) {
        try {
            return jsonwebtoken_1.default.verify(refreshToken, config_1.REFRESH_SECRET_KEY);
        }
        catch (error) {
            return null;
        }
    }
    async findToken(refreshToken) {
        const { rows: token } = await databases_1.default.query(`SELECT * FROM tokens WHERE refresh_token = $1;`, [refreshToken]);
        return token[0];
    }
    async removeToken(refreshToken) {
        const { rows: removedToken } = await databases_1.default.query(`DELETE FROM tokens WHERE refresh_token = $1 RETURNING refresh_token;`, [refreshToken]);
        return removedToken[0];
    }
}
exports.tokenService = new TokenService();
//# sourceMappingURL=token.service.js.map