const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const handleNonexistentPath = require('../controllers/nonexistent');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', handleNonexistentPath);

module.exports = router;
