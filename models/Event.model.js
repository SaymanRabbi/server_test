'use strict';

const mongoose = require('mongoose');

const Event = mongoose.model('Event', {
  title: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
}, 'events');

module.exports = Event;