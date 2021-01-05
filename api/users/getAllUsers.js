const User = require('../../models/User');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { permission, cooperativeId } = req.user;
  const { cooperativeId: cooperative } = req.query;

  let condition = {};
  const filter = ['-__v', '-updatedAt', '-password', '-transactionPin'];

  if (permission === 'cooperative') {
    condition = { permission: 'cooperative', cooperativeId };
  }

  if (permission === 'admin') {
    if (cooperative) {
      condition = {
        ...condition,
        permission: 'cooperative',
        cooperativeId: cooperative,
      };
    }
  }

  const users = await User.find(condition).select(filter);

  const message = 'Users retrieved successfully';
  return response(res, next, 200, users, message);
};
