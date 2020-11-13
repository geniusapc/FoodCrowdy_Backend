/* eslint no-shadow:"off" */
const winston = require('winston');
require('winston-mongodb');
const { MONGODB_URI } = require('../config/keys');

const { createLogger, format, transports } = winston;

const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}  ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.File({ filename: './logs/combine.log' }),
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.Console(),
  ],

  exitOnError: true,

  exceptionHandlers: [
    new transports.File({ filename: './logs/exceptions.log' }),
    new transports.Console(),
    new transports.MongoDB({
      db: MONGODB_URI,
      options: { useUnifiedTopology: true },
    }),
  ],
});

module.exports = logger;
