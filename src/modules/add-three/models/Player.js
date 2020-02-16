const { Schema } = require('mongoose');
const connection = require('../utils/db');

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = connection.model('Player', playerSchema);
