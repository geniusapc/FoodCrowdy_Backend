/* eslint eqeqeq:"off", func-names:"off" */
const Settlement = require('../../models/Settlement');

const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { settlementId, status } = req.body;

  const settlement = await Settlement.findById(settlementId);

  if (!settlement) throw new Error('Invalid Invoice');

  if (settlement.status === 'outstanding')
    throw new Error('invoice receipt has not been submitted');

  settlement.status = status;
  settlement.save();

  const message = 'Settlement retrived  successfully';
  return response(res, next, 200, null, message);
};
