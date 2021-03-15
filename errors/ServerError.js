class ServerError extends Error {
  constructor(message, errLocation) {
    super();
    this.message = message;
    this.errLocation = errLocation;
    this.statusCode = 500;
  }
}

module.exports = ServerError;
