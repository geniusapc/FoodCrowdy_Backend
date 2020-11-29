const CoopProducts = require('../../models/CoopProducts');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { permission } = req.user;
  const { cooperativeId } = req.params;

  let filter = ['-__v', '-updatedAt'];
  const condition = { cooperativeId };

  if (req.query.visibility) condition.visibility = req.query.visibility;

  if (permission !== 'admin') {
    filter = [
      '-cooperativeId',
      '-landingCost',
      '-baseProfit',
      '-coopPercentProfit',
      '-visibility',
      ...filter,
    ];
  }

  const products = await CoopProducts.find(condition)
    .sort({ createdAt: -1 })
    .select(filter);
  return response(res, next, 200, products);
};
