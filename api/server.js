const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

const router = require('../routers/router');

server.use(
  helmet(),
  morgan('combined'),
  cors(),
  express.json()
);

server.use('/', router)

server.get('/', (req, res) => {
  res
    .status(200)
    .json({
      "api": "disneyland utility api",
      "routes": [
          "/rides",
        ],
    });
});

module.exports = server;
