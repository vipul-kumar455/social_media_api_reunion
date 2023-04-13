const mongoose = require('mongoose');
const { Schema } = mongoose;

const comment = new Schema({
    comment: {
        type: String,
        required: true,
        maxlength: 300,
        minlength: 2,
        require: true
    },
    created_at: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('Comment', comment);