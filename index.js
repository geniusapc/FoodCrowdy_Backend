require('./startup/unCaughtErrors');
const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./startup/db');

/* eslint-disable */
const main = async () => {
  require('./startup/requiredKeys')();
  require('./startup/startUpMiddlewares')(app);
  await db();
  require('./startup/api')(app);
  require('./startup/listenToPort')(app);
};

main();
