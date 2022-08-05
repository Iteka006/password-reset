const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Review', ReviewSchema)