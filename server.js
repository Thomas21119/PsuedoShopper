const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const routes = require('./controllers');
const handlebars = require('express-handlebars');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = handlebars.create();
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

