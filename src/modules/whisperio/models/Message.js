const mongoose = require('mongoose');
const connection = require('../utils/db');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  },
}, {
  timestamps: true,
});

module.exports = connection.model('Message', messageSchema);
