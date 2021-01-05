const User = require('../../models/User');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { userId } = req.params;

  const payload = { ...req.body };

  const user = await User.findById(userId);
  if (!user) throw new Error('Invalid User');

  if (payload.wallet && payload.wallet.balance) {
    payload.wallet = {
      ...payload.wallet,
      balance: user.wallet.balance + payload.wallet.balance,
    };
  }

  if (payload.roles)
    payload.roles = [...new Set([...user.roles, ...payload.roles])];

  await User.updateOne({ _id: userId }, payload);

  const message = 'User edited successfully';
  return response(res, next, 200, null, message);
};
