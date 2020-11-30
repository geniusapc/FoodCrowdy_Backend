const Payment = require('../../models/CooperativePayment');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { permission, cooperativeId } = req.user;
  // const filter = [];

  let condition = {
    cooperative: cooperativeId,
    paymentType: { $ne: 'flutterwave' },
  }; // coop admin see all payment that is not flutter payment

  if (permission === 'admin') condition = {};

  const invoice = await Payment.find(condition).populate('invoice');

  const message = 'Payment retrieved successfully';
  return response(res, next, 200, invoice, message);
};
