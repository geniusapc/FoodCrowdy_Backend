/* eslint consistent-return:off */
const Cooperative = require('../../models/Cooperative');
const { errorResponse } = require('../../utils/response');

module.exports.auth = async (req, res, next) => {
  const { api_key: apiKey } = req.query;
  if (!apiKey) return errorResponse(res, 400, 'You must provide an api_key');
  const cooperative = await Cooperative.findOne({ apiKey }).lean();
  if (!cooperative) return errorResponse(res, 401, 'Invalid api_key');

  req.user = {
    cooperativeId: cooperative._id,
    permission: cooperative.permission,
  };

  next();
};

module.exports.adminPrevillege = async (req, res, next) => {
  const message = 'You dont have permission to perform this action';
  if (req.user.permission !== 'admin') return errorResponse(res, 403, message);
  next();
};
module.exports.adminCheckCoopId = async (req, res, next) => {
  if (req.user.permission === 'admin') {
    const { cooperativeId } = req.query;
    if (!cooperativeId)
      return errorResponse(res, 422, 'You must provide a cooperativeId');

    req.user.cooperativeId = cooperativeId;
  }
  next();
};
