const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { updUserValidator } = require('../middlewares/validators');

router.get('/me', getUser);
router.patch('/me', updUserValidator, updateUser);

module.exports = router;
