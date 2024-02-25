const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    campsites: {
        type: mongoose.Schema.Types.ObjectId,
        default: ''
    },
},
    {
        timestamps: true
    }
)

const Partner = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;