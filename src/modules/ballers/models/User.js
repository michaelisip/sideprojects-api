const { Model, STRING, INTEGER } = require('sequelize');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');

const sequelize = require('../utils/db');

class User extends Model {}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: STRING,
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'users',
  modelName: 'User',
  hooks: {
    beforeCreate: (user) => {
      const SALT = genSaltSync();
      // eslint-disable-next-line no-param-reassign
      user.password = hashSync(user.password, SALT);
    },
  },
});

/** Notes */
/**
 * Has one position
 * Has one 2k profile
 * Has many posts
 * Has many favorite players
 * Has many pictures
 * Has many videos
 */

module.exports = User;
