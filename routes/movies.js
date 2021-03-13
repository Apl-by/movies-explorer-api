const router = require('express').Router();
const { getMovies, createMovies, deleteMovie } = require('../controllers/movies');
const { movieValidator, idValidator } = require('../middlewares/validators');

router.get('/', getMovies);
router.post('/', movieValidator, createMovies);
router.delete('/:_id', idValidator, deleteMovie);

module.exports = router;
