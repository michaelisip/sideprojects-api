const { Router } = require('express');

const GameController = require('../controllers/GameController');

const router = Router();

router.get('/games', GameController.index);
router.get('/games/:id', GameController.show);
router.post('/games', GameController.store);
router.put('/games/:id', GameController.update);
router.delete('/games/:id', GameController.delete);

module.exports = router;
