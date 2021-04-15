const Movie = require('../models/movie');
const { ForbiddenError } = require('../errors/index');
const { errMessages } = require('../data/errMessages');

const createMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id, movieId: req.body.movieId })
    .then((result) => {
      if (result.length) {
        return next(
          new ForbiddenError(errMessages.err403.createMovie, 'createMovie'),
        );
      }
      return Movie.create({ ...req.body, owner: req.user._id })
        .then((card) => res.send(card));
    }).catch(next);
};

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .orFail()
    .then((movie) => {
      if (String(movie.owner) !== req.user._id) {
        return next(
          new ForbiddenError(errMessages.err403.deleteMovie, 'deleteMovie'),
        );
      }
      return Movie.findByIdAndRemove(req.params._id)
        .orFail()
        .then(() => res.send({ message: 'Карточка с фильмом удалена из сохранённых' }));
    })
    .catch(next);
};

module.exports = { getMovies, createMovies, deleteMovie };
