const cron = require('node-cron');
const generateCoopPaymentInvoice = require('./generateCoopPaymentInvoice');
const logger = require('../startup/logger');

module.exports = async () => {
  cron.schedule('0 12 * * Monday', async () => {
    logger.info(`Generating cooperative settlement invoice for Date:${Date()}`);
    generateCoopPaymentInvoice();
  });
};
