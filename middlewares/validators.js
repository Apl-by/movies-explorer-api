const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const registerValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const loginValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(5),
  }),
});

const updUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const movieValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Некорректная ссылка на постер к фильму');
    }),
    trailer: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Некорректная  ссылка на трейлер фильма');
    }),
    thumbnail: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Некорректная  ссылка на мини-постер к фильму');
    }),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().custom((value, helper) => {
      if (validator.isAlphanumeric(value, 'ru-RU')) {
        return value;
      }
      return helper.message('Поле nameRU должно быть заполнено на русском языке');
    }),
    nameEN: Joi.string().required().custom((value, helper) => {
      if (validator.isAlphanumeric(value, 'en-US')) {
        return value;
      }
      return helper.message('Поле nameEN должно быть заполнено на английском языке');
    }),
  }),
});

const idValidator = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().length(24).hex(),
  }),
});

module.exports = {
  registerValidator, loginValidator, updUserValidator, movieValidator, idValidator,
};
