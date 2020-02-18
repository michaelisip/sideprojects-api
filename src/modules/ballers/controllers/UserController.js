const User = require('../models/User');

class UserController {
  async index(req, res, next) {
    try {
      const users = await User.findAll();
      res.json({
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const user = await User.findByPk(id);
      res.json({
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const user = await User.create(req.body);
      res.json({
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const user = await (await User.findByPk(id)).update(req.body);
      res.json({
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const user = await (await User.findByPk(id)).destroy();
      res.json({
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
