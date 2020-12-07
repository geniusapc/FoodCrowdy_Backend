const User = require('../../models/User');
const Cache = require('../../models/Cache');

module.exports = async (req, res) => {

  const { password, token } = req.body;
  const result = await Cache.findOne({ emailToken: token });

  if (!result) return res.status(422).send({ message: 'Invalid token' });

  const user = await User.findById(result.userId);

  user.password = password;
  await user.save();

  await Cache.deleteOne({ emailToken: token });
  return res.sendStatus(200);
};
