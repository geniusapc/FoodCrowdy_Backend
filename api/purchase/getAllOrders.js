const Payment = require('../../models/CooperativePayment');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { permission, cooperativeId } = req.user;
  const { startDate, endDate, orderRef } = req.query;

  let condition = {};

  if (orderRef) condition.orderRef = { $in: orderRef };

  if (startDate && endDate)
    condition.createdAt = { $gt: startDate, $lt: endDate };

  if (permission !== 'admin') {
    condition = {
      ...condition,
      cooperativeId,
      paymentType: { $ne: 'flutterwave' },
    }; // coop admin see all payment that is not flutter payment
  }

  const invoice = await Payment.find(condition).populate('invoice');

  const message = 'Payment retrieved successfully';
  return response(res, next, 200, invoice, message);
};
