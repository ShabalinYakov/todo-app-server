"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
    static UnauthorizedError() {
        return new HttpException(401, 'Unauthorized');
    }
    static BadRequest(message) {
        return new HttpException(400, message);
    }
}
exports.default = HttpException;
//# sourceMappingURL=HttpException.js.map