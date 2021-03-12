const router = require('express').Router();

router.get('/', (req, res) => res.send('ok get m'));
router.post('/', (req, res) => res.send('ok post m'));
router.delete('/:movieId', (req, res) => res.send('ok delete m'));

module.exports = router;
