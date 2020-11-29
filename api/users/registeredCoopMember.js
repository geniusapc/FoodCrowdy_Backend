const User = require('../../models/User');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { permission, cooperativeId } = req.user;
  const filter = ['-__v', '-updatedAt', '-password', '-transactionPin'];

  let condition = { permission: 'cooperative', cooperativeId }; // coop admin see all payment that is not flutter payment

  if (permission === 'admin') condition = {};

  const users = await User.find(condition).select(filter);

  const message = 'Users retrieved successfully';
  return response(res, next, 200, users, message);
};
