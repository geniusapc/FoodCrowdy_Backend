/* eslint eqeqeq:"off", func-names:"off" */
const Settlement = require('../../models/Settlement');
const cloudinary = require('../../config/cloudinary');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { _id } = req.user;
  const { settlementId } = req.body;
  const settlement = await Settlement.findOne({ _id: settlementId });

  if (!settlement) throw new Error('invoice do not exist');
  if (settlement.status === 'paid') throw new Error('payment already settled');

  if (req.file) {
    const { secure_url: receipt } = await cloudinary.v2.uploader
      .upload(req.file.path, {
        folder: '/settlement/',
      })
      .catch((err) => {
        throw err.error;
      });
    settlement.receipt = receipt;
  }

  settlement.paidBy = _id;
  settlement.paidOn = Date();
  settlement.status = 'processing';
  settlement.save();

  const message = 'Receipt submitted  successfully';
  return response(res, next, 200, settlement, message);
};
