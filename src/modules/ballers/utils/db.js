const Sequelize = require('sequelize');
require('dotenv').config();

const HOST = process.env.BALLERS_DB_HOST || 'localhost';
const DIALECT = process.env.BALLERS_DB_DIALECT || 'mysql';
const NAME = process.env.BALLERS_DB_NAME || 'ballers';
const USERNAME = process.env.BALLERS_DB_USERNAME || 'root';
const PASSWORD = process.env.BALLERS_DB_PASSWORD || '';

const sequelize = new Sequelize(NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('Ballers MySQL connection established...');
  } catch (error) {
    console.error('Ballers MySQL connection error...', error);
  }
}

checkConnection();

module.exports = sequelize;
