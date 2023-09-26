const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    slug: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    height: {
        type: String,

    },

    width: {
        type: String,

        required: false
    },

    type: {
        type: String,

        required: true
    },

    weight: {
        type: String,

        required: false
    },
    goldWeight: {
        type: String,
        required: false
    },
    gold: {
        type: String,
        required: true
    },

    makingCharges: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    gst: {
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required:true
    },
    productWeight: {
        type: String,
        required:false
    },
    totalWeight: {
        type: String,
        required:false
    },
    totalNoOfDiamonds: {
        type: String,
        required:false
    },
    total: {
        type: String,
        required: true
    },
    Diamond: {
        type: String,
        required: false
    },
    stoneColour: {
        type: String,
        required: false
    },
    stoneWeight: {
        type: String,
        required: false
    },
    stone: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    offer: { type: Number },

    productPictures: [
        { img: { type: String } }
    ],
    reviews: [

        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            review: String
        }
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    updatedAt: Date,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);