class ApiError extends Error {
  status;
  errors;

  constructor(status: number, message: string, errors: object[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован');
  }

  static BadRequest(message: string) {
    return new ApiError(400, message);
  }
}

export default ApiError;
