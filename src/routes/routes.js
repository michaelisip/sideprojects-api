const { Router } = require('express');

const portfolio = require('../modules/portfolio/index');
const addthree = require('../modules/add-three/index');
const whisperio = require('../modules/whisperio/index');

const router = Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send('Server is up and running...');
});

/** Modules */
router.use(portfolio);
router.use(addthree);
router.use(whisperio);

module.exports = router;