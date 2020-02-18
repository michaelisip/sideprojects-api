const { sign } = require('jsonwebtoken');

const User = require('../models/User');

class AuthController {
  async register(req, res, next) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      const payload = { id: user.id };
      const token = sign(payload, process.env.BALLERS_PASSPORT_SECRET);
      res.json(token);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
