// DB class

'use strict'

const
  dotenv = require('dotenv'),
  MongoClient = require('mongodb').MongoClient,
  uri = process.env.DB_CONNECTION,
  dbName = process.env.DB_NAME,
  log = require('../logger.js'),
  assert = require('assert');

var db;

const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

connect();

function connect() {
  client.connect(function(err) {
    assert.equal(null, err);
    log.message(`Connected successfully to database.`);
    db = client.db(dbName);
    //client.close();
  });
}

async function loadCollection(sCollection) {
  return db.collection(sCollection);
}

function disconnect() {
  client.close();
}

module.exports.db = db;
module.exports.connect = connect;
module.exports.loadCollection = loadCollection;
module.exports.disconnect = disconnect;
