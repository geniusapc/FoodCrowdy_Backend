const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    user: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        _id: false,
        id: mongoose.Types.ObjectId,
        qty: Number,
        price: Number,
        title: String,
      },
    ],
    orderRef: {
      type: String,
      required: true,
    },

    delivery: {
      type: {
        type: String,
        enum: ['pickup', 'door delivery'],
      },
      state: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        default: 'NGN',
      },
    },
    totalPrice: {
      type: Number,
    },
    txIsValid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coop_Invoice', schema);
