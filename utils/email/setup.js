const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const { MAIL_AUTH_PASS, MAIL_AUTH_USER } = require('../../config/keys');

module.exports = async (msg) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'box2181.bluehost.com',
      port: 26,
      // secure: true,
      auth: {
        user: MAIL_AUTH_USER,
        pass: MAIL_AUTH_PASS,
      },
    })
  );

  await transporter.sendMail(msg);
};
