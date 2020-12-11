const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');
const { Schema } = mongoose;

const schema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },

    emailToken: {
      type: String,
    },
    requestId: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    otp: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

schema.plugin(findOrCreate);
const EmailCache = mongoose.model('Cache', schema);
module.exports = EmailCache;
