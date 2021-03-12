const router = require('express').Router();
const { getMovies, createMovies, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', createMovies);
router.delete('/:movieId', deleteMovie);

module.exports = router;
