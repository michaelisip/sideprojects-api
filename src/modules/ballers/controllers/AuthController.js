const { sign } = require('jsonwebtoken');

const User = require('../models/User');

class AuthController {
  constructor() {
    this.secret = process.env.BALLERS_PASSPORT_SECRET || 'superSecret';
  }

  async register(req, res, next) {
    try {
      const user = await User.create(req.body);
      const payload = { id: user.id };
      const token = sign(payload, this.secret);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        res.json({ message: 'Email is not registered.' });
      }
      const payload = { id: user.id };
      const token = sign(payload, this.secret);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      const payload = { id: user.id };
      const token = sign(payload, this.secret);
      res.json(token);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
