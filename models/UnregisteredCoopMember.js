const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    cooperativeId: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    permission: {
      type: String,
      default: 'cooperative',
    },
    walletBalance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('unregistered_coop_member', schema);


