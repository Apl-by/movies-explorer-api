const mongoose = require('mongoose');
const validator = require('validator');
const { isLangValid } = require('../utils/utils');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  director: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  year: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: [validator.isURL, 'Некорректная ссылка на постер к фильму'],
  },
  trailer: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: [validator.isURL, 'Некорректная  ссылка на трейлер фильма'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: [validator.isURL, 'Некорректная  ссылка на мини-постер к фильму'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Поле должно быть заполнено'],
  },
  movieId: {
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  nameRU: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: [(v) => isLangValid(v, 'ru'), 'Имя фильма должно быть на русском языке'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: [(v) => isLangValid(v, 'en'), 'Имя фильма должно быть на английском языке'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
