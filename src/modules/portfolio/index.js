const { Router } = require('express');

const routes = require('./routes/routes');
const middlewares = require('./middlewares/Middlewares');

const router = Router();

/** routes */
router.use(routes);

/** middlewares */
router.use(middlewares);

module.exports = router;
