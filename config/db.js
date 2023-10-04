'use strict';

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbURI = process.env.DATABASE_STRING;

module.exports = () => {
  return mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
}