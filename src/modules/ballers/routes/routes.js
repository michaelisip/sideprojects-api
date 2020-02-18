const passport = require('passport');
const { Router } = require('express');

const authRoutes = require('./auth');
const usersRoutes = require('./users');
const gamesRoutes = require('./games');
const courtsRoutes = require('./courts');
const postsRoutes = require('./posts');
const commentsRoutes = require('./comments');

const router = Router();

router.use(authRoutes);
router.use(passport.authenticate('jwt'), [
  usersRoutes,
  gamesRoutes,
  courtsRoutes,
  postsRoutes,
  commentsRoutes,
]);

module.exports = router;
