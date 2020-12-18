const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    cooperativeId: {
      type: mongoose.Types.ObjectId,
      ref: 'Cooperative',
    },
    orderRef: [
      {
        type: String,
      },
    ],
    totalPrice: {
      type: Number,
    },
    receipt: {
      type: String,
    },
    paidBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    paidOn: {
      type: Date,
    },
    confirmedBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['outstanding', 'processing', 'paid', 'declined'],
      default: 'outstanding',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Settlement', schema);
