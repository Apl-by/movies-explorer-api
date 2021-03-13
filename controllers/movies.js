const Movie = require('../models/movie');
const ForbiddenError = require('../errors/ForbiddenError');

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
  Movie.findById(req.params._id).orFail()
    .then((movie) => {
      if (String(movie.owner) !== req.user._id) {
        return next(new ForbiddenError('Нельзя удалить чужую карточку с фильмом', 'deleteMovie'));
      }
      return Movie.findByIdAndRemove(req.params._id).orFail()
        .then(() => res.send({ message: 'Карточка с фильмом удалена из сохранённых' }));
    })
    .catch(next);
};

module.exports = { getMovies, createMovies, deleteMovie };
