const { Model, STRING, INTEGER } = require('sequelize');

const sequelize = require('../utils/db');
const Game = require('./Game');

class Court extends Model {}

Court.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  rating: {
    type: INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 10,
    },
  },
  longitude: {
    type: INTEGER,
    allowNull: false,
  },
  latitude: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  underscored: true,
  tableName: 'courts',
  modelName: 'court',
});

/** Relationships */
// Court.hasMany(Game);

module.exports = Court;
