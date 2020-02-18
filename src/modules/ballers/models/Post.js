const { Model, STRING, INTEGER } = require('sequelize');

const sequelize = require('../utils/db');
const User = require('./User');
const Comment = require('./Comment');

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
/**
 * For some reason this doesn't work here,
 * but it works on the user model
 */
// Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = Post;
