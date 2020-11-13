const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    coopId: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    authUrl: {
      type: String,
      default: null,
    },
    paymentVerificationUrl: {
      type: String,
      default: null,
    },
    paymentUrl: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cooperative', schema);
