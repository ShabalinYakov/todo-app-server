declare class HttpException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string);
    static UnauthorizedError(): HttpException;
    static BadRequest(message: string): HttpException;
}
export default HttpException;
