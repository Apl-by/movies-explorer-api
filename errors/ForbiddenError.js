class ForbiddenError extends Error {
  constructor(message, errLocation) {
    super();
    this.message = message;
    this.errLocation = errLocation;
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
