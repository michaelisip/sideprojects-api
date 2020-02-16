const { Router } = require('express');

const routes = require('./routes/routes');

const router = Router();

/** routes */
router.use(routes);

module.exports = router;
