const User = require('../../models/User');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { userId } = req.params;

  const user = await User.findOneAndUpdate({ _id: userId }, { ...req.body });
  if (!user) throw new Error('Invalid User');

  const message = 'User edited successfully';
  return response(res, next, 200, null, message);
};
