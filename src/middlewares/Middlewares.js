const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const router = express.Router();

/** Packages */
router.use(cors({
  origin: [
    process.env.PORTFOLIO_ORIGIN,
    process.env.ADDTHREE_ORIGIN,
    process.env.WHISPERIO_ORIGIN,
  ],
}));
router.use(express.json());
router.use(helmet());
router.use(morgan('common'));
router.use(express.static('public'));

/** Custom */
// router.use(() => {});

module.exports = router;
