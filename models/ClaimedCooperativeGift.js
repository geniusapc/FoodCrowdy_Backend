const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    cooperativeId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    gift: [
      {
        giftId: { type: mongoose.Types.ObjectId, required: true },
        quantity: { type: String, required: true },
      },
    ],
    address: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'processing',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Claim_Cooperative_Gift', schema);
