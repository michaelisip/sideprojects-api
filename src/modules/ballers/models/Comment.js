const { Model, STRING, INTEGER } = require('sequelize');

const sequelize = require('../utils/db');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model {}

Comment.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  underscored: true,
  tableName: 'comments',
  modelName: 'comment',
});

/** Relationships */
/**
 * For some reason these doesn't work here,
 * but it works on the user and post model
 */
// Comment.belongsTo(User);
// Comment.belongsTo(Post);

module.exports = Comment;
