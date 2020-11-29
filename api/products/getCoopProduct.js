const CoopProducts = require('../../models/CoopProducts');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { permission } = req.user;
  const { productId } = req.params;

  let filter = ['-__v', '-updatedAt'];
  const condition = { _id: productId };

  if (req.query.visibility) condition.visibility = req.query.visibility;

  if (permission !== 'admin') {
    filter = [
      '-cooperativeId',
      '-landingCost',
      '-baseProfit',
      '-coopPercentProfit',
      ...filter,
    ];
  }

  const products = await CoopProducts.find(condition).select(filter);
  return response(res, next, 200, products);
};
