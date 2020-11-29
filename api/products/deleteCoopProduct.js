const Products = require('../../models/CoopProducts');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const result = await Products.deleteOne({ _id: req.params.productId });
  if (result.deletedCount === 0) throw new Error('Invalid product Id');
  const message = 'Product deleted successfully';
  return response(res, next, 200, null, message);
};
