const CoopProducts = require('../../models/CoopProducts');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { cooperativeId, permission } = req.user;

  let filter = [];
  let condition = {};

  if (permission === 'admin') {
    condition.visibility = req.query.visibility;
    condition.cooperativeId = req.query.cooperativeId;
    filter = [];
  } else {
    condition = { visibility: 1, cooperativeId };
    filter = [
      '-cooperativeId',
      '-landingCost',
      '-baseProfit',
      '-coopPercentProfit',
      '-visibility',
    ];
  }
  const products = await CoopProducts.find(condition)
    .sort({ createdAt: -1 })
    .select(['-__v', '-updatedAt', ...filter]);
  return response(res, next, 200, products);
};
