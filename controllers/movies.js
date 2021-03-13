const Movie = require('../models/movie');

const createMovies = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.user._id })
    .then((card) => res.send(card))
    .catch(next);
};

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findOneAndDelete({ _id: req.params._id }).orFail()
    .then(() => res.send({ message: 'Фильм удален из сохранённых' }))
    .catch(next);
};

module.exports = { getMovies, createMovies, deleteMovie };
