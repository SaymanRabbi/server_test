'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('@colors/colors');

const routes = require('./routers/event.routes');
const connectDB = require('./config/db');
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/events', routes);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found!');
});

connectDB()
.then(() => {
  console.log('💥 Database Connected Successfully!'.underline.blue);
  app.listen(port, () => {
    console.log(`✔✔ Server running on port ${port}`.underline.yellow);
  })
}).catch((err) => {
  console.log(err);
})
