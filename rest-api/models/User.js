

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true

        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            require: true
        },
        verifiedUserByEmail: {
            type: Boolean
        },
    });

module.exports = mongoose.model('User', userSchema)