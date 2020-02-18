const { Router } = require('express');

const BallerController = require('../controllers/BallerController');

const router = Router();

router.get('', BallerController.index);
router.get('/:id', BallerController.show);
router.post('', BallerController.store);
router.put('/:id', BallerController.update);
router.delete('/:id', BallerController.delete);

module.exports = router;
