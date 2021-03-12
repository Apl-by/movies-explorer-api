const router = require('express').Router();

router.get('/me', (req, res) => res.send('ok get u'));
router.patch('/me', (req, res) => res.send('ok patch u'));

module.exports = router;
