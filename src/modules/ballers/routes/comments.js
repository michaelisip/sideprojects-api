const { Router } = require('express');

const CommentController = require('../controllers/CommentController');

const router = Router();

router.get('/comments', CommentController.index);
router.get('/comments/:id', CommentController.show);
router.post('/comments', CommentController.store);
router.put('/comments/:id', CommentController.update);
router.delete('/comments/:id', CommentController.delete);

module.exports = router;
