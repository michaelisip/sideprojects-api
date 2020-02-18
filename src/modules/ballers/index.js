const { Router } = require('express');
const passport = require('passport');

const router = Router();

const routes = require('./routes/routes');

/** middlewares */
router.use(passport.initialize());
require('./utils/passport'); // load passport config

/** routes */
router.use(routes);

module.exports = router;
