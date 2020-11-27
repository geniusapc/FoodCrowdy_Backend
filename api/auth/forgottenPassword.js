const crypto = require('crypto');
const User = require('../../models/User');
const sendForgotMail = require('../../utils/email/forgotpassword');

const Cache = require('../../models/Cache');

module.exports = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    const emailToken = crypto.randomBytes(64).toString('hex');
    await Cache.findOrCreate(
      { userId: user._id },
      { emailToken },
      async (err) => {
        if (err) throw err;
        await sendForgotMail(user, emailToken);
      }
    );
  }

  res.sendStatus(200);
};
