const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const User = require('../models/User');
require('dotenv').config();

/**
 * https://stackoverflow.com/questions/47657629/how-to-authenticate-a-route-with-passport-jwt
 */

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.BALLERS_PASSPORT_SECRET,
};

const strategy = new Strategy(opts, async (payload, next) => {
  try {
    const user = await User.findOne({ id: payload.id });
    next(null, user || false);
  } catch (error) {
    next(error, false);
  }
});

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
