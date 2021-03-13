class ConflictError extends Error {
  constructor(message, errLocation) {
    super();
    this.message = message;
    this.errLocation = errLocation;
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
