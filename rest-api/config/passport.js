


const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Client = mongoose.model('clients');
const keys = require('./kyes');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

        // console.log('Passport User ID: ', jwt_payload.id)

       Client.findById(jwt_payload.id)
       .then(user => {
           if (user) {
               // console.log('Passport User: ', user)
               return done(null, user);
           }
           return done(null, false);
       })
       .catch(err => console.log(err));
    }));
};