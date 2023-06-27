class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }

  static UnauthorizedError() {
    return new HttpException(401, 'Unauthorized');
  }

  static BadRequest(message: string) {
    return new HttpException(400, message);
  }
}

export default HttpException;
