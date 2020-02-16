const mongoose = require('mongoose');
const connection = require('../utils/db');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      type: String,
      ref: 'User',
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
}, {
  timestamps: true,
});

module.exports = connection.model('Room', roomSchema);
