const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.ADDTHREE_DB_URI;

const connection = mongoose.createConnection(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
