const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const handlebars = require('express-handlebars');
const session = require('express-session');
//const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sessionConfig = {
  secret: process.env.SECRET,
  cookie: { maxAge: 300000 }, 
  resave: false,
  saveUninitialized: false,
};

//Use Express Session & get config from sessionConfig
app.use(session(sessionConfig));

//Handlebars.js
const hbsjs = handlebars.create(/*{ helpers }*/); //If we need helpers later, can add in and uncomment here & above.
app.engine('handlebars', hbsjs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});