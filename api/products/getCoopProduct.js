const CoopProducts = require('../../models/CoopProducts');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { cooperativeId, permission } = req.user;
  const { visibility } = req.query;
  const { productId } = req.params;

  let filter = [];
  let condition = { cooperativeId, _id: productId };

  if (permission === 'admin' && visibility) {
    // condition.visibility = visibility;
  } else {
    condition = { visibility: 1 };
    filter = [
      '-cooperativeId',
      '-landingCost',
      '-baseProfit',
      '-coopPercentProfit',
      '-visibility',
    ];
  }
  const products = await CoopProducts.find(condition).select([
    '-__v',
    '-updatedAt',
    ...filter,
  ]);
  return response(res, next, 200, products);
};
