const Payment = require('../../models/CooperativePayment');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const paymentStatus = await Payment.findOne({
    orderRef: req.query.orderRef,
    status: 'successful',
  }).select({ status: 1 });
  const message = 'status verified  successfully';
  return response(res, next, 200, paymentStatus, message);
};
