const Court = require('../models/Court');

class CourtController {
  async index(req, res, next) {
    try {
      const courts = await Court.findAll();
      res.json({
        data: courts,
      });
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const court = await Court.findByPk(id);
      res.json({
        data: court,
      });
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const court = await Court.create(req.body);
      res.json({
        data: court,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const court = await (await Court.findByPk(id)).update(req.body);
      res.json({
        data: court,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const court = await (await Court.findByPk(id)).destroy();
      res.json({
        data: court,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CourtController();
