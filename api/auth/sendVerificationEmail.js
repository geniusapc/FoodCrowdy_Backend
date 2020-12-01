const crypto = require('crypto');
const User = require('../../models/UnregisteredCoopMember');
const sendVerificationMail = require('../../utils/email/coopRegistration');
const Cache = require('../../models/Cache');

module.exports = async (req, res) => {
  const emailToken = crypto.randomBytes(64).toString('hex');
  const user = await User.findOne({ email: req.body.email });

  if (user && !user.isVerified) {
    await Cache.findOrCreate({ userId: user._id }, { emailToken }, () => {});
    await sendVerificationMail(user, emailToken);
  }
  return res.sendStatus(200);
};