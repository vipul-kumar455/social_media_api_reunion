// const JWT = require('jsonwebtoken');

const { ThrowError } = require("../common/Errors")
const User = require('../models/user')

exports.getUserProfile = (req, res, next) => {
    const userId = req.params.user_id;

    User.findOne({ _id: userId })
        .then(data => {
            if (!data) ThrowError("user's profile not found!", 404);
            if (userId) res.status(200).json({ result: data });
        })
        .catch(err => next(err))
}
