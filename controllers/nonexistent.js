const NotFoundError = require('../errors/NotFoundError');

const nonexistentPath = (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден', 'nonexistentPath'));
};

module.exports = nonexistentPath;
