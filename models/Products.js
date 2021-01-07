const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    agentId: {
      type: String,
    },
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    location: {
      type: String,
    },
    availableState: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: Object,
    },

    quantity: {
      type: Number,
    },
    measurement: {
      type: Array,
    },
    expenses: {
      type: Object,
    },
    profitPercentage: {
      type: Number,
    },
    blogLink: {
      type: String,
    },
    bargainedPrice: {
      type: Object,
    },
    isSoldOut: {
      type: Boolean,
      default: false,
    },
    visibility: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', schema);
