const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = require('../../config/keys');

module.exports = async (msg) => {
  sgMail.setApiKey(SENDGRID_API_KEY);
  await sgMail.send(msg);
};
