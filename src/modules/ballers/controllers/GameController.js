const Game = require('../models/Game');

class GameController {
  async index(req, res, next) {
    try {
      const games = await Game.findAll();
      res.json({
        data: games,
      });
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const game = await Game.findByPk(id);
      res.json({
        data: game,
      });
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const game = await Game.create(req.body);
      res.json({
        data: game,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const game = await (await Game.findByPk(id)).update(req.body);
      res.json({
        data: game,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const game = await (await Game.findByPk(id)).destroy();
      res.json({
        data: game,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GameController();
