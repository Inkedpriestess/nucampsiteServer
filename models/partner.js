const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    elevation: {
        type: Number,
        required: true
    },
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {

    },

    timestamps: true

})

const Partner = mongoose.model('Parner', partnerSchema);

module.exports = Partner;

//     {
//     "name": "Mongo Fly Shop",
//     "image": "images/mongo-logo.png",
//     "featured": false,
//     "description": "Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop."
// })