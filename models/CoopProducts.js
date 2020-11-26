const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    cooperativeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cooperative',
    },
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    unit: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    visibility: {
        type: Number,
        default: 1,
    },
    landingCost: {
        type: Number,
    },
    baseProfit: {
        type: Number,
    },
    coopPercentProfit: {
        type: Number,
    },
}, { timestamps: true });

module.exports = mongoose.model('Cooperative_Product', schema);