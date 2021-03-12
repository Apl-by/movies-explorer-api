const handleErrors = (err, req, res, next) => {
  res.send(err);
  next();
};

module.exports = handleErrors;
