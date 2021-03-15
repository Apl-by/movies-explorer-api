class NotFoundError extends Error {
  constructor(message, errLocation) {
    super();
    this.message = message;
    this.errLocation = errLocation;
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
