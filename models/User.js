/* eslint func-names:"off", consistent-return:"off"    */
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_KEY } = require('../config/keys');
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
    staffId: {
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
    cooperativeId: {
      type: mongoose.Types.ObjectId,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    roles: [],
    accountStatus: {
      type: String,
      enum: ['active', 'suspended'],
      default: 'active',
    },
    permission: {
      type: String,
      default: 'user',
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

schema.methods.authToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id, uniqueId: user.uniqueId }, JWT_KEY);
  return token;
};

schema.methods.compareTransactionPin = async function (pin) {
  const user = this;
  const result = await bcrypt.compare(pin.toString(), user.transactionPin);
  return result;
};
schema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  const result = await bcrypt.compare(candidatePassword, user.password);
  return result;
};

module.exports = mongoose.model('User', schema);
