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
    cooperativeId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Cooperative',
    },
    tagName: {
      type: String,
      required: true,
    },
    delivery: {
      address: {
        type: String,
      },
      price: {
        type: String,
      },
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
