const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config/keys');
const logger = require('./logger');

module.exports = async () => {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  logger.info('connected to database');
};
