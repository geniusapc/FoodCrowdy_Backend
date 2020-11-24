/* eslint func-names:"off", consistent-return:"off"    */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const schema = new Schema(
  {
    googleId: {
      type: String,
      default: null,
    },
    fbId: {
      type: String,
      default: null,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    cooperative: {
      type: Array,
    },
    walletBalance: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
    },
    transactionPin: {
      type: String,
    },
    userName: {
      type: String,
      lowercase: true,
      trim: true,
    },
    uniqueId: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    location: {
      type: String,
    },
    referralId: {
      type: String,
      default: null,
    },
    monthOfBirth: {
      type: Number,
      default: null,
    },
    dayOfBirth: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

schema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  }
  if (user.isModified('transactionPin')) {
    const salt = await bcrypt.genSalt(10);
    const hashedPin = await bcrypt.hash(user.transactionPin, salt);
    user.transactionPin = hashedPin;
  }

  next();
});

schema.methods.compareTransactionPin = async function (pin) {
  const user = this;
  if(!user.transactionPin) return false
  const result = await bcrypt.compare(pin.toString(), user.transactionPin);
  return result;
};
schema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  const result = await bcrypt.compare(candidatePassword, user.password);
  return result;
};

module.exports = mongoose.model('User', schema);
