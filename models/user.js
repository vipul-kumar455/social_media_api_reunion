const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProfile = new Schema({
    first_Name: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 2,
        trim: true
    },
    last_Name: { type: String, required: true, maxlength: 15, minlength: 2, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    followers: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    joining_date: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('User', userProfile);