
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
    one: {
        type: String
    },
    two: {
        type: String
    },
    three: {
        type: String
    },
    image: {
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