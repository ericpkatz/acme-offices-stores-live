const express = require('express');
const path = require('path');
const swig = require('swig');
swig.setDefaults({ cache: false });

const db = require('./db');

db.seed()
  .then( ()=> console.log('seeded'))
  .catch( (err)=> console.log(err));

const app = express();

app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=> {
  Promise.all([
      db.models.Office.findAll({ include: db.models.Place }),
      db.models.Store.findAll({ include: db.models.Place })
  ])
  .then(([ offices, stores] ) => res.render('index', { offices, stores }))
  .catch(next);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
