const _ = require('lodash');
const User = require('../../models/User');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  let validUser = await User.findOne({ email });
  if (!validUser) throw new Error('Invalid credentials');

  const user = await validUser.comparePassword(password);
  if (!user) throw new Error('Invalid credentials');

  const token = await validUser.authToken();
  validUser = _.omit(validUser.toObject(), ['password']);

  return res.header({ 'x-auth-token': token }).send({
    status: 'success',
    message: 'login successful',
    data: validUser,
  });
};
