require('./startup/unCaughtErrors');
const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./startup/db');
const cronJobs = require('./cron/index');

/* eslint-disable */
const main = async () => {
  require('./startup/requiredKeys')();
  require('./startup/startUpMiddlewares')(app);
  await db();
  require('./startup/api')(app);
  cronJobs();
  require('./startup/listenToPort')(app);
};

main();
