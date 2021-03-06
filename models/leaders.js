const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
// const currency = mongoose.types.Currency;

const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    designation: {
        type: String
    }
});

const Leaders = mongoose.model('Leader', leaderSchema);
module.exports = Leaders;