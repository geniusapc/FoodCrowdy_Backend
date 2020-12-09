const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    userId: {
      type: String,
    },
    orderRef: {
      type: String,
    },
    invoice: {
      type: mongoose.Types.ObjectId,
      ref: 'Coop_Invoice',
    },
    cooperativeId: {
      type: mongoose.Types.ObjectId,
      ref: 'Cooperative',
    },
    paymentRef: {
      type: String,
    },
    code: {
      type: String,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
      lowercase: true,
    },
    currency: {
      type: String,
      uppercase: true,
      default: 'NGN',
    },
    paymentType: {
      type: String,
      enum: ['fcWallet', 'coopWallet', 'flutterwave'],
    },
    deliveryStatus: {
      type: String,
      enum: ['processing', 'set for delivery', 'delivered'],
      default: 'processing',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('cooperative_payment', schema);
