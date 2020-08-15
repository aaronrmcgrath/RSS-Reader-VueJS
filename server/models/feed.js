// Feed Schema for DB

'use strict'

const
  log = require('../logger.js'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Feed = new Schema({
  feedName: { type: String, required: true },
  subscriptionDate: { type: Date, required: false },
  feedURL: { type: String, required: true },
  isFavorite: { type: Boolean, required: false}
});

module.exports = mongoose.model('Feed', Feed);
