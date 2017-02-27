const db = require('./_db');
const Office = require('./Office');
const Store = require('./Store');
const Place = require('./Place');

Office.belongsTo(Place);
Store.belongsTo(Place);

const sync = ()=> db.sync({force: true });

const seed = ()=> {
    const places = [
    { name: 'statue of liberty', lat: 40.689249, lng: -74.044500},
    { name: 'empire state building', lat: 40.748441, lng: -73.985664},
    { name: 'full stack academy', lat: 40.705076, lng: -74.009160},
  ];

  let statueOfLiberty, empireStateBuilding, fullStack;
  return sync()
    .then( ()=> places.map( place => Place.create(place)))
    .then( (promises) => Promise.all(promises))
    .then( (result) => [ statueOfLiberty, empireStateBuilding, fullStack ] = result)
    .then( ()=> Promise.all([
        Office.create({ placeId: fullStack.id, name: 'FS Office'}),
        Office.create({ placeId: empireStateBuilding.id, name: 'ES Office'}),
        Store.create({ placeId: statueOfLiberty.id, name: 'SL Store'}),
        Store.create({ placeId: empireStateBuilding.id, name: 'ES Store'})
    ]));
}

module.exports = {
  sync,
  seed,
  models: {
    Office,
    Store,
    Place
  }
};
