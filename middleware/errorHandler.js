/* eslint no-unused-vars:"off", no-param-reassign:"off" */
const logger = require('../startup/logger');
const { errorResponse } = require('../utils/response');

module.exports = (err, req, res, next) => {
  switch (err.name) {
    case 'Error':
      err.status = 400;
      break;
    case 'MongoError':
      err.status = 400;
      break;
    case 'ValidationError':
      err.status = 422;
      err.message = err.message.split(':')[2] || err.details[0].message;
      break;
    default:
      logger.error(err);
      err.status = 500;
  }

  return errorResponse(res, err.status, err.message);
};
