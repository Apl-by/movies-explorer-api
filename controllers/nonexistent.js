const { NotFoundError } = require('../errors/index');
const { errMessages } = require('../data/errMessages');

const nonexistentPath = (req, res, next) => {
  next(new NotFoundError(errMessages.err404.nonexistentPath, 'nonexistentPath'));
};

module.exports = nonexistentPath;
