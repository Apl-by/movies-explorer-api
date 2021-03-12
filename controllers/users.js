const bcrypt = require('bcryptjs');
const User = require('../models/user');

const createUser = (req, res, next) => {
  const { body } = req;
  bcrypt.hash(body.password, 10)
    .then((hash) => User.create({ ...body, password: hash }))
    .then((user) => res.send({ data: `Пользователь ${user.name}(${user.email}) создан` }))
    .catch(next);
};

const getUser = (req, res, next) => {
  // const id = req.user._id;
  const id = '604b75dd137a8906ac800933'; // удалить хардкод!!!
  User.findById(id).orFail()
    .then((user) => res.send(user))
    .catch(next);
};

const updateUser = (req, res, next) => {
  // const id = req.user._id;
  const id = '604b75dd137a8906ac800933'; // удалить хардкод!!!
  User.findByIdAndUpdate(
    id,
    req.body,
    { new: true, runValidators: true },
  )
    .orFail()
    .then((user) => res.send(user))
    .catch(next);
};

module.exports = { getUser, updateUser, createUser };
