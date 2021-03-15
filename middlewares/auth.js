const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors/index');
const { JWT_SECRET } = require('../config/config');
const { errMessages } = require('../data/errMessages');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return next(new UnauthorizedError(errMessages.err401.auth, 'auth'));
  }

  req.user = payload;
  return next();
};

module.exports = auth;
