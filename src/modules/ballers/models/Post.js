const { Model, STRING, INTEGER } = require('sequelize');

const sequelize = require('../utils/db');
const User = require('./User');

class Post extends Model {}

Post.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  underscored: true,
  tableName: 'posts',
  modelName: 'post',
});

/** Relationships */
// Post.belongsTo(User);

module.exports = Post;
