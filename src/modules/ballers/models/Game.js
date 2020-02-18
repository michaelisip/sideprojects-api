const { Model, STRING, INTEGER, DATE } = require('sequelize');

const sequelize = require('../utils/db');
const User = require('./User');
const Court = require('./Court');
const GameUser = require('./pivot/GameUser');

class Game extends Model {}

Game.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  date: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  underscored: true,
  tableName: 'games',
  modelName: 'game',
});

/** Relationships */

/**
 * https://medium.com/@tonyangelo9707/many-to-many-associations-using-sequelize-941f0b6ac102
 * many to many
 */
// Game.hasMany(User, {
//   through: GameUser,
// });
// Game.belongsTo(Court); // one to many

module.exports = Game;
