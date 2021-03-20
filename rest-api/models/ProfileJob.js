
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileJobSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'clients'
    },
    username: {
        type: String
    },
    AnswerOne: {
        type: String
    },
    AnswerTwo: {
        type: String
    },
    AnswerThree: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profileJob', ProfileJobSchema);