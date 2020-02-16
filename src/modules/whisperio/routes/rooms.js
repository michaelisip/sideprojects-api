const express = require('express');

const RoomController = require('../controllers/RoomController');

const router = express.Router();

router.get('/rooms/', RoomController.index);
router.get('/rooms/:id', RoomController.show);
router.post('/rooms/', RoomController.store);
router.put('/rooms/:id', RoomController.update);
router.delete('/rooms/:id', RoomController.delete);

module.exports = router;
