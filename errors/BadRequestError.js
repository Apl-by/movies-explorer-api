class BadRequestError extends Error {
  constructor(message, errLocation) {
    super();
    this.message = message;
    this.errLocation = errLocation;
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
