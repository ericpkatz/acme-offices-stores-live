const db = require('./_db');

const Place = db.define('place', {
  name: db.Sequelize.STRING,
  lat: db.Sequelize.DECIMAL,
  lng: db.Sequelize.DECIMAL
});

module.exports = Place;
