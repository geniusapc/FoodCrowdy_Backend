const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cooperativeId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Cooperative',
    },
    qty: {
      type: Number,
      required: true,
    },
    tagName: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    visibility: {
      type: Number,
      enum: [0, 1],
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cooperative_gift', schema);
