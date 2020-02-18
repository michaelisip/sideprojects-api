const { Model, INTEGER } = require('sequelize');

const sequelize = require('../../utils/db');
const User = require('../User');
const Game = require('../Game');

class GameUser extends Model {}

GameUser.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize,
  timestamps: true,
  underscored: true,
  tableName: 'game_user',
  modelName: 'game_user',
});

/** Relationships */
// GameUser.belongsTo(User);
// GameUser.belongsTo(Game);

module.exports = GameUser;
