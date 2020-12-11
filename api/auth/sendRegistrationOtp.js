const User = require('../../models/UnregisteredCoopMember');
const Cache = require('../../models/Cache');
const { genRandNum } = require('../../utils/randomCode/randomCode');
const sendOtp = require('../../utils/sms/sendOtp');

module.exports = async (req, res) => {
  const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
  if (!user) throw new Error('Invalid User');

  const otp = genRandNum(4);

  await Cache.findOrCreate(
    { userId: user._id },
    { phoneNumber: req.body.phoneNumber, otp },
    () => {}
  );

  await sendOtp({ otp, phoneNumber: req.body.phoneNumber });
  return res.sendStatus(200);
};
