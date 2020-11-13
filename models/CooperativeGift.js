const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cooperativeId: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    image: {
      publicId: {
        type: String,
      },
      secureUrl: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cooperative_gift', schema);
