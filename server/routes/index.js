// Index that routes the calls

'use strict'

const
  express = require('express'),
  dotenv = require('dotenv'),
  router = express.Router(),
  path = require('path'),
  feeds = require('./feeds.js'),
  log = require('../logger.js');

// Feeds API Routes
router.use('/feeds', feeds);

// main html page
router.get('/',(request,response) => {
  response.status(200).send('Thanks for checking out the API, please try a different route for data. :)');
});

// wild card redirect
router.get('/*', function(request, response){
    response.redirect('/');
});

module.exports = router;
