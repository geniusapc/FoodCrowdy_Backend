const Settlement = require('../../models/Settlement');
const Payment = require('../../models/CooperativePayment');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { settlementId } = req.params;

  const settlement = await Settlement.findById(settlementId).lean();

  let settlementDetails = [];

  if (settlement) {
    const payment = await Payment.find({
      orderRef: { $in: settlement.orderRef },
    }).populate('invoice');
    settlementDetails = { ...settlement, payment };
  }

  const message = 'settlement details retrieved successfully';
  return response(res, next, 200, settlementDetails, message);
};
