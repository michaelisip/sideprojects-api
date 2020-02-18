const { Router } = require('express');

const CourtController = require('../controllers/CourtController');

const router = Router();

router.get('/courts', CourtController.index);
router.get('/courts/:id', CourtController.show);
router.post('/courts', CourtController.store);
router.put('/courts/:id', CourtController.update);
router.delete('/courts/:id', CourtController.delete);

module.exports = router;
