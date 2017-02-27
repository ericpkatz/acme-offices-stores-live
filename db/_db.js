const Sequelize = require('sequelize');

if(!process.env.DATABASE_URL){
  throw 'No environment variable for database-- process.env.DATABASE_URL';
}

const db = new Sequelize(process.env.DATABASE_URL);

module.exports = db;

