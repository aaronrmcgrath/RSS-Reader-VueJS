// Feeds API Routes for feed POST, PATCH, GET, and DELETE calls

'use strict'

const
  express = require('express'),
  feeds = express.Router(),
  path = require('path'),
  db = require('./db.js'),
  Feed = require('../models/feed.js'),
  log = require('../logger.js');

  // get calls
  feeds.get('/:name', async (request,response) => {
    log.message(`Running query request for: '${request.params.name}'`);
    const feedList = await db.loadCollection('feeds');
    response.send(await feedList.find({feedName:request.params.name}).toArray());
  });

  feeds.get('/', async (request,response) => {
    const feedList = await db.loadCollection('feeds');
    log.message('Successfully loaded collection about to send to client.');
    response.send(await feedList.find({}).toArray());
    //response.status(200).send('Thanks for checking out the API, please try a different route for data. :)');
  });

  // post calls
  feeds.post('/', async (request,response) => {
    const feedList = await db.loadCollection('feeds');
    log.message('About to post new feed to collection.');
    log.message(request.body.feedName);
    var newFeed = new Feed({
      feedName: request.body.feedName,
      feedURL: request.body.feedURL,
      subscriptionDate: new Date(),
      isFavorite: request.body.isFavorite
    });
    log.message(newFeed);
    response.send(await feedList.insertOne(newFeed));
    log.message('Insert of one new feed completed successfully.');
  });

  // patch calls
  // TODO: add update functions

  //delete calls
  // TODO: add delete functions

  module.exports = feeds;
