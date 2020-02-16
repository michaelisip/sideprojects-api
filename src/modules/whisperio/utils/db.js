const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.WHISPERIO_DB_URI;

const connection = mongoose.createConnection(URI, {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

module.exports = connection;
