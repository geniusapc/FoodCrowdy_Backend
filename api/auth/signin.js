const _ = require('lodash');
const User = require('../../models/User');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  let validUser = await User.findOne({ email });
  if (!validUser)
    return res.status(422).send({ message: 'Invalid credentials' });

  const user = await validUser.comparePassword(password);
  if (!user) return res.status(422).send({ message: 'Invalid credentials' });

  const token = await validUser.authToken();
  validUser = _.omit(validUser.toObject(), ['password']);

  return res.header({ 'x-auth-token': token }).send(validUser);
};
