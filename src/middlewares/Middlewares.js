const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { join } = require('path');
require('dotenv').config();

const router = express.Router();

/** Packages */
router.use(cors({
  origin: [
    process.env.PORTFOLIO_ORIGIN || 'http://localhost:3000',
    process.env.ADDTHREE_ORIGIN || 'http://localhost:3000',
    process.env.WHISPERIO_ORIGIN || 'http://localhost:3000',
  ],
}));
router.use(express.json());
router.use(helmet());
router.use(morgan('common'));
router.use(express.static(join(__dirname, '../..', 'public')));

/** Custom */
// router.use(() => {});

module.exports = router;
