const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    userId: {
      type: String,
      required: [true, 'userId is required'],
    },
    orderRef: {
      type: String,
      required: [true, 'Payment order ref is required'],
    },
    invoice: {
      type: mongoose.Types.ObjectId,
      required: [true, 'Invoice id is required'],
      ref: 'Coop_Invoice',
    },
    cooperative: {
      type: mongoose.Types.ObjectId,
      required: [true, 'cooperative Id ref is required'],
      ref: 'Cooperative',
    },
    paymentRef: {
      type: String,
      required: [true, 'Payment ref is required'],
    },
    code: {
      type: String,
    },
    amount: {
      type: Number,
      required: [true, 'Payment amount is required'],
    },
    status: {
      type: String,
      lowercase: true,
      required: [true, 'Payment status is required'],
    },
    currency: {
      type: String,
      uppercase: true,
      default: 'NGN',
    },
    paymentType: {
      type: String,
      enum: ['fcWallet', "coopWallet", "flutterwave"],
      required: [true, 'Payment type is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('cooperative_payment', schema);
