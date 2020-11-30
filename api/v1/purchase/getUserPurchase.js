/* eslint eqeqeq:"off", func-names:"off" */
const Invoice = require('../../../models/CoopInvoice');

const { response } = require('../../../utils/response');

const payload = (id) => {
  const condition = { txIsValid: true };

  if (id) {
    condition['user.id'] = id;
  }

  return [
    {
      $match: condition,
    },
    {
      $lookup: {
        from: 'cooperative_payments',
        localField: 'orderRef',
        foreignField: 'orderRef',
        as: 'payment',
      },
    },
    {
      $unwind: {
        path: '$payment',
      },
    },
    {
      $unwind: {
        path: '$products',
      },
    },
    {
      $lookup: {
        from: 'cooperative_products',
        localField: 'products.id',
        foreignField: '_id',
        as: 'product',
      },
    },
    {
      $project: {
        delivery: 1,
        deliveryStatus: 1,
        user: 1,
        orderRef: 1,
        totalPrice: 1,
        products: {
          _id: '$products.id',
          quantity: '$products.qty',
          totalPrice: '$products.totalPrice',
          title: {
            $arrayElemAt: ['$product.title', 0],
          },
        },
      },
    },
    {
      $group: {
        _id: '$orderRef',
        deliveryStatus: { $first: '$deliveryStatus' },
        user: { $first: '$user' },
        totalPrice: { $sum: '$totalPrice' },

        orderRef: { $first: '$orderRef' },
        products: { $push: '$products' },
        delivery: { $first: '$delivery' },
      },
    },
  ];
};

module.exports = async (req, res, next) => {
  const pipeline = payload(req.query.userId);
  const paymentStatus = await Invoice.aggregate(pipeline);

  const message = 'Payment verified  successfully';
  return response(res, next, 200, paymentStatus, message);
};
