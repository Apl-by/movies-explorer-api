const Movie = require('../models/movie');

const createMovies = (req, res, next) => {
  // const { _id } = req.user;
  const id = '604b75dd137a8906ac800933'; // удалить хардкод!!!
  Movie.create({ ...req.body, owner: id })
    .then((card) => res.send(card))
    .catch(next);
};

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findOneAndDelete({ movieId: req.params.movieId }).orFail()
    .then(() => res.send({ message: 'Фильм удален из сохранённых' }))
    .catch(next);
};

module.exports = { getMovies, createMovies, deleteMovie };
