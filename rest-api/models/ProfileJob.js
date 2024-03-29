
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
    articles: [
        {
            id: {
                type: Schema.Types.ObjectId
            },
            category: {
                type: String
            },
            title: {
                type: String
            },
            article: {
                type: String
            },
        }
    ],
        lat: {
            type: Number
        },
        lng: {
            type: Number
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