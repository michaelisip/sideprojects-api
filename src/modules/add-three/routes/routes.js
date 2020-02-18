/* eslint-disable no-unused-vars */
const { Router } = require('express');

const Player = require('../models/Player');

const router = Router();

router.get('/scores', async (req, res, next) => {
  const players = await Player.find();
  res.json({
    data: players,
  });
});

router.get('/scores/latest', async (req, res, next) => {
  const players = await Player.find().sort('-createdAt');
  res.json({
    data: players,
  });
});

router.get('/scores/highest', async (req, res, next) => {
  const players = await Player.find().sort('-score');
  res.json({
    data: players,
  });
});

router.post('/scores', async (req, res, next) => {
  const player = await Player.create(req.body);
  res.json({
    data: player,
  });
});

module.exports = router;
