/* eslint no-process-exit:"off", array-callback-return:"off" */
const logger = require('./logger');
const config = require('../config/keys');

const requiredSecretKeys = () => {
  const keys = [
    'PORT',
    'MONGODB_URI',
    'CLOUDINARY_CLOUD_NAME',
    'CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET',
    'CLIENTNAME',
    'EBULKY_USER_NAME',
    'EBULKY_USER_NAME',
    'FLW_SECRET_HASH',
    'MAIL_AUTH_USER',
    'MAIL_AUTH_PASS',
    'JWT_KEY',
  ];

  keys.map((key) => {
    if (!config[key]) {
      logger.error(`FATAL ERROR: ${key} is not set.`);
      process.exit(1);
    }
  });
};

module.exports = requiredSecretKeys;
