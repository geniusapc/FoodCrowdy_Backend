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
    },
    products: [
      {
        _id: false,
        id: mongoose.Types.ObjectId,
        qty: Number,
        price: Number,
      },
    ],
    orderRef: {
      type: String,
      required: true,
    },
    delivery: {
      price: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      currency: {
        type: String,
        default: 'NGN',
      },
      // state: {
      //   type: String,
      //   required: true,
      // },
    },
    totalPrice: {
      type: Number,
    },
    txIsValid: {
      type: Boolean,
      default: false,
    },
    deliveryStatus: {
      type: String,
      enum: ['processing', 'set for delivery', 'delivered'],
      default: 'processing',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coop_Invoice', schema);
