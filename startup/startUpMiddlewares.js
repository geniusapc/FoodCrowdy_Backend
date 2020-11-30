const express = require('express');
const winston = require('winston');
const expressWinston = require('express-winston');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

module.exports = (app) => {
  app.use(helmet());
  app.use(compression());
  app.use(
    cors({
      origin: '*',
      exposedHeaders: ['x-auth-token', 'Content-Length', 'Content-Type'],
      allowedHeaders: ['x-auth-token', 'Content-Length', 'Content-Type'],
    })
  );

  app.use(
    expressWinston.logger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
      meta: false,
      msg: 'HTTP {{req.method}} {{req.url}}',
      expressFormat: true,
      colorize: true,
    })
  );

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
};
