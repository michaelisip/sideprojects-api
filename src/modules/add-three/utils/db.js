const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.ADDTHREE_DB_URI || 'mongodb://localhost:3001/add-three';

const connection = mongoose.createConnection(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
