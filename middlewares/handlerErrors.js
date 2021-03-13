const { CelebrateError } = require('celebrate');
const {
  ConflictError,
  ServerError,
  BadRequestError,
  NotFoundError,
} = require('../errors/index');
const { errMessages } = require('../data/errMessages');

const handleErrors = (err, req, res, next) => {
  try {
    if (err instanceof CelebrateError) {
      const message = err.details.get('body')
        ? err.details.get('body').details[0].message
        : err.details.get('params').details[0].message;
      return res.status(400).send({ message });
    }
    if (err.errLocation === 'login' && err.statusCode === 401) {
      return res.status(err.statusCode).send({ message: err.message });
    }
    if (err.errLocation === 'auth' && err.statusCode === 401) {
      return res.status(err.statusCode).send({ message: err.message });
    }
    if (err.errLocation === 'deleteMovie' && err.statusCode === 403) {
      return res.status(err.statusCode).send({ message: err.message });
    }
    if (err.errLocation === 'nonexistentPath' && err.statusCode === 404) {
      return res.status(err.statusCode).send({ message: err.message });
    }
    if (err.name === 'MongoError' && err.code === 11000) {
      throw new ConflictError(errMessages.err409.mongo11000);
    }
    if (err.name === 'CastError' || err.name === 'ValidationError') {
      throw new BadRequestError(err.message);
    }
    if (err.name === 'DocumentNotFoundError') {
      throw new NotFoundError(err.message);
    }
    if (
      err.name === 'SyntaxError'
      || err.name === 'TypeError'
      || err.name === 'ReferenceError'
      || err.name === 'RangeError'
    ) {
      throw new BadRequestError(err.stack);
    }
    throw new ServerError(errMessages.err500);
  } catch (e) {
    res.status(e.statusCode).send({ message: e.message });
    return next();
  }
};

module.exports = handleErrors;
