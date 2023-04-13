const mongoose = require('mongoose');
const { Schema } = mongoose;

const post = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 2,
        require: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 400,
        minlength: 2,
        require: true
    },
    comments_by: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    created_at: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('Post', post);