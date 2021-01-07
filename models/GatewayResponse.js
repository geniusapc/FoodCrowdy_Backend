const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');
const { Schema } = mongoose;

const schema = new Schema(
  {
    txRef: {
      type: String,
    },
    flwRef: {
      type: String,
    },
    amount: {
      type: Number,
    },
    chargedAmount: {
      type: Number,
    },
    status: {
      type: String,
    },
    currency: {
      type: String,
      default:"NGN"
    },
    customer: {
      type: Object,
    },
    paymentType: {
      type: String,
    },
  },
  { timestamps: true }
);

schema.plugin(findOrCreate);
module.exports = mongoose.model('Gatewayresponse', schema);

