/* eslint eqeqeq:"off", func-names:"off" */
const Payment = require('../../models/CooperativePayment');

const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { id } = req.user;
  const invoice = await Payment.find({ userId: id }).populate('invoice');

  const message = 'Payment verified  successfully';
  return response(res, next, 200, invoice, message);
};
