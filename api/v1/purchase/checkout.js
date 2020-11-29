const Invoice = require('../../../models/CoopInvoice');
const CoopProducts = require('../../../models/CoopProducts');
const { response } = require('../../../utils/response');

const generateUniqueNumber = () =>
  Math.random().toString(36).substring(2).toUpperCase();

const productValidation = (mergedProductRequest) => {
  const error = mergedProductRequest
    .map((prod) => {
      if (!prod.visibility) return `${prod.title} is not available`;
      if (prod.qty > prod.quantity)
        return `The quantity requested for ${prod.title} is more than Available quantity`;
      return null;
    })
    .filter(Boolean);
  return { error };
};

module.exports = async (req, res, next) => {
  const { products, delivery, user } = req.body;
  const { cooperativeId } = req.user;

  const productIds = products.map((product) => product.id);

  const dbProduct = await CoopProducts.find({ _id: { $in: productIds } })
    .select(['quantity', 'title', 'visibility', 'price'])
    .lean();

  if (!dbProduct.length || productIds.length !== dbProduct.length)
    throw new Error('Cart contains Invalid product');

  const mergedProductRequest = products.map((item) => ({
    ...item,
    ...dbProduct.find((dbItems) => item.id === dbItems._id.toString()),
  }));

  // check for product availability
  const { error } = productValidation(mergedProductRequest);
  if (error.length) throw new Error(error[0]);

  let orderRef = generateUniqueNumber();

  const invoice = await Invoice.find({}).select(['orderRef']);

  if (invoice.length) {
    const orderRefList = invoice.map((e) => e.orderRef);
    while (orderRefList.includes(orderRef)) {
      orderRef = generateUniqueNumber();
    }
  }

  const prod = mergedProductRequest.map((e) => ({
    qty: e.qty,
    price: e.price,
    id: e.id,
  }));

  // payment  invoice
  const invoicePayload = {
    user,
    products: prod,
    orderRef,
    delivery,
    totalPrice: (() => {
      const tot = prod.map((e) => e.price * e.qty).reduce((a, b) => a + b);
      return tot + (delivery.price || 0);
    })(),
  };

  await Invoice.create({ ...invoicePayload, cooperativeId });
  const message = 'Invoice generated successfully';
  return response(res, next, 200, invoicePayload, message);
};
