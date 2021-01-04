const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    agentId: {
      type: String,
      default: null,
    },
    products: {
      type: Array,
    },
    orderReference: {
      type: String,
      required: true,
    },
    delivery: {
      type: Object,
    },
    deliveryState: {
      type: String,
    },
    deliveryAddress: {
      type: String,
    },
    swag: {
      type: Array,
    },
    agentFee: {
      type: Number,
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

module.exports = mongoose.model('Invoice', schema);
