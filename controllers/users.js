const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  JWT_SECRET, COOKIE_NAME, tokenConfig, cookieConfig,
} = require('../config/config');
const User = require('../models/user');

const createUser = (req, res, next) => {
  const { body } = req;
  bcrypt.hash(body.password, 10)
    .then((hash) => User.create({ ...body, password: hash }))
    .then((user) => res.send({ data: `Пользователь ${user.name}(${user.email}) создан` }))
    .catch(next);
};

const getUser = (req, res, next) => {
  User.findById(req.user._id).orFail()
    .then((user) => res.send(user))
    .catch(next);
};

const updateUser = (req, res, next) => {
  User.findByIdAndUpdate(
    req.user._id,
    req.body,
    { new: true, runValidators: true },
  )
    .orFail()
    .then((user) => res.send(user))
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, tokenConfig);
      res.cookie(COOKIE_NAME, token, cookieConfig).send({ token });
    })
    .catch(next);
};

module.exports = {
  getUser, updateUser, createUser, login,
};
