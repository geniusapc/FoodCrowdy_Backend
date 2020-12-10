const Cache = require('../../models/Cache');

/* eslint consistent-return:"off" */
module.exports = async (req, res) => {
  const { phoneNumber, otp } = req.body;

  const cache = await Cache.findOne({ phoneNumber });
  
  if (!cache)
    return res.status(422).send({ message: 'Please generate an OTP' });
  if (cache.isVerified)
    return res.status(422).send({ message: 'User already verified' });

  if (cache.otp !== otp)
    return res.status(400).send({ message: 'Invalid otp' });

  await Cache.updateOne({ phoneNumber }, { isVerified: true });
  return res.send('success');
};
