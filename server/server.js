// SERVER

'use strict'

// imports dependencies and setup http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express().use(bodyParser.json()), // creates express http server
  port = process.env.PORT || 3600,
  dotenv = require('dotenv').config(),
  log = require('./logger.js'),
  index = require('./routes/index.js');

// install by 'npm install dotenv' if it's required/used in project
/*
dotenv.config({
  path: '../.env'
});
*/

//log.message(__dirname);

// postgresql db setup example: http://www.javascriptpoint.com/nodejs-postgresql-tutorial-example/
// from another file/template, saving in case html/front end added later

// Routes //
// routes and server connection

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('public'));

// index which is the main router
app.use('/', index);

// server //
// sets server port and logs messages on success
app.listen(port, () => log.message(`rss-feed-reader server is listening on port: ${port} \n`));

module.exports = app;
