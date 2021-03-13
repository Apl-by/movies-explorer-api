class UnauthorizedError extends Error {
  constructor(message, errLocation) {
    super();
    this.message = message;
    this.errLocation = errLocation;
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
