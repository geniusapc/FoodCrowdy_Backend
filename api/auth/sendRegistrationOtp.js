const User = require('../../models/UnregisteredCoopMember');
const Cache = require('../../models/Cache');
const { genRandNum } = require('../../utils/randomCode/randomCode');
const sendOtp = require('../../utils/sms/sendOtp');

module.exports = async (req, res) => {
  const { phoneNumber } = req.body;
  const user = await User.findOne({ phoneNumber });
  if (!user) throw new Error('Invalid User');

  const otp = genRandNum(4);

  await Cache.findOrCreate(
    { userId: user._id },
    { phoneNumber, otp, isVerified: false },
    () => {}
  );

  await sendOtp({ otp, phoneNumber });
  return res.sendStatus(200);
};
