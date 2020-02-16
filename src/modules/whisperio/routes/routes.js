const { Router } = require('express');

const usersRoute = require('./users');
const roomsRoute = require('./rooms');

const router = Router();

router.use('', usersRoute);
router.use('', roomsRoute);

module.exports = router;
