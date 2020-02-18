const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.WHISPERIO_DB_URI || 'mongodb://localhost:3001/whisperio';

const connection = mongoose.createConnection(URI, {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

module.exports = connection;
