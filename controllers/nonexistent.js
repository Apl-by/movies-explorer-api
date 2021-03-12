const handleNonexistentPath = (req, res, next) => {
  next(new NotFoundError({ message: 'Запрашиваемый ресурс не найден' }));
};

module.exports = handleNonexistentPath;
