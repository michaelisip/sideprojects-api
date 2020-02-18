const { Router } = require('express');
const passport = require('passport');

const AuthController = require('../controllers/AuthController');

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('logout', passport.authenticate('jwt'), AuthController.logout);

module.exports = router;
