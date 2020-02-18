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
 * For some reason this doesn't work here,
 * but it works on the user model
 */
// Game.belongsToMany(User, {
//   through: GameUser,
// });
Game.belongsTo(Court);
Court.hasMany(Game);

module.exports = Game;
