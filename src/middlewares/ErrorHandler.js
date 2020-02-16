const { Router } = require('express');
const dotenv = require('dotenv');

const router = Router();
dotenv.config();

// eslint-disable-next-line no-unused-vars
router.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.ENV === 'production' ? '🤷‍♂️' : error.message,
  });
});

module.exports = router;
