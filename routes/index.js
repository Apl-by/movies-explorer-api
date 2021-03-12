const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
// const nonexistentPath = require('./controllers/nonexistent');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', (req, res) => res.send('none 404'));

module.exports = router;
