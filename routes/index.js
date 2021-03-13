const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const deleteCookie = require('../controllers/signout');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const nonexistentPath = require('../controllers/nonexistent');
const auth = require('../middlewares/auth');

router.post('/signup', createUser);
router.post('/signin', login);
router.post('/signout', deleteCookie);
router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);
router.use('*', nonexistentPath);

module.exports = router;
