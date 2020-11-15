const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    apiKey: {
      type: String,
      required: [true, 'Api key is required'],
      unique: true,
    },
    permission: {
      type: String,
      default: 'cooperative',
    },
    accessKey: {
      type: String,
      required: [true, 'Access key is required'],
    },
    authUrl: {
      type: String,
      default: null,
    },
    paymentUrl: {
      type: String,
      default: null,
    },
    paymentVerificationUrl: {
      type: String,
      default: null,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cooperative', schema);
