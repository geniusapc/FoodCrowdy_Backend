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
      lowercase: true,
      default: 'cooperative',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('cooperative_payment', schema);
