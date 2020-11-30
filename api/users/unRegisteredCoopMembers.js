const UnregisteredCoopMember = require('../../models/UnregisteredCoopMember');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { permission, cooperativeId } = req.user;
  const filter = ['-__v', '-updatedAt'];

  let condition = { cooperativeId }; // coop admin see all payment that is not flutter payment

  if (permission === 'admin') condition = {};
  const users = await UnregisteredCoopMember.find(condition).select(filter);

  const message = 'users retrieved successfully';
  return response(res, next, 200, users, message);
};
