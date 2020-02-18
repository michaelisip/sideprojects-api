const passport = require('passport');
const { Router } = require('express');

const authRoutes = require('./auth');
const ballersRoutes = require('./ballers');

const router = Router();

router.use(authRoutes);
router.use(passport.authenticate('jwt'), ballersRoutes);

module.exports = router;
