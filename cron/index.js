const cron = require('node-cron');
const generateCoopPaymentInvoice = require('./generateCoopPaymentInvoice');
const logger = require('../startup/logger');

module.exports = async () => {
  cron.schedule('* * * * Sunday', async () => {
    logger.info(`generating cooperative settlement invoice for Date:${Date()}`);
    generateCoopPaymentInvoice();
  });
};
