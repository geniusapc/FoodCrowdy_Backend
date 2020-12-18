/* eslint eqeqeq:"off", func-names:"off" */
const Payment = require('../../models/CooperativePayment');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { cooperativeId } = req.user;

  const conditions = {
    status: 'successful',
    settlementInvoiceIsGenerated: { $not: { $eq: true } },
    cooperativeId,
    paymentType: { $in: ['fcWallet', 'coopWallet'] },
    deliveryStatus: 'delivered',
  };

  const filter = ['orderRef', 'amount', 'cooperativeId'];

  const settlement = await Payment.find(conditions).select(filter);

  //   if (settlement.length) {
  const totalPrice = settlement.reduce((a, { amount }) => a + amount, 0);
  const orderRef = settlement.map((e) => e.orderRef);

  const data = {
    totalPrice,
    orderRef,
    cooperativeId,
  };
  //   }

  const message = 'Settlement retrieved  successfully';
  return response(res, next, 200, data, message);
};
