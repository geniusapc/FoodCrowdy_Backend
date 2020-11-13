const logger = require('../startup/logger');
const { errorResponse } = require('../utils/response');

/* eslint no-unused-vars:"off", no-param-reassign:"off" */

module.exports = (err, req, res, next) => {
  
  if (err.name === 'ValidationError') {
    err.status = 422;
    const [, , message] = err.message.split(':');
    err.message = message;
  }

  if (err.name === 'MongoError') {
    err.status = 400;
  }
  if (!err.status) {
    logger.error(err);
    err.status = 500;
  }

  return errorResponse(res, err.status, err.message);
};
