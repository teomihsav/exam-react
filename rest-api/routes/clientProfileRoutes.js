
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const ProfileClient = require('../models/ProfileClient')
const Client = require('../models/Client')
const apiValidateRegistration = require('../validationApi/apiValidateRegister')
const apiValidateLogin = require('../validationApi/apiValidateLogin')


const errors = {}

router.post('/answers', passport.authenticate('jwt', { session: false }), (req, res) => {

    // const { errors } = apiValidateRegistration(req.body)

    // if (Object.keys(errors).length > 0) {
    //     return res.status(400).json(errors);
    // } else {

    console.log('Response: ', req.user.id)

    let profileAnswers = {}
    profileAnswers.client = req.user.id
    profileAnswers.username = req.user.username
    profileAnswers.one = req.body.one
    profileAnswers.two = req.body.two
    profileAnswers.three = req.body.three

    ProfileClient.findOne({ client: req.user.id })
        .then(profile => {
            if (profile) {
                ProfileClient.findOneAndUpdate(
                    { client: req.user.id },
                    { $set: profileAnswers },
                    { new: true }
                ).then(profile => res.json(profile))
                // console.log(profile)
                // errors.profileAlreadyDone = 'You already did answer this question'
                // return res.status(404).json(errors) // On found "answers" at DB returns errors and display it at page form
            } else {
                new ProfileClient(profileAnswers)
                    .save()
                    .then(profile => res.json(profile));
                console.log('After user auth: ', profile)
            }
        })
    // }
})

router.get('/takeAnswers', passport.authenticate('jwt', { session: false }), (req, res) => {

    // const { errors } = apiValidateRegistration(req.body)

    // if (Object.keys(errors).length > 0) {
    //     return res.status(400).json(errors);
    // } else {

    console.log('Response takeAnswers', req.user.id)

    let profileAnswers = {}

    ProfileClient.findOne({ client: req.user.id })
        .populate('client', ['email'])
        .then(profile => {
            if (profile) {
                console.log('Api:', profile)
                return res.status(200).json(profile)
            } else {
                console.log('Error, no data:')
                res.end().json()
            }
        })
        .catch(err => {
            console.log(err.response)
        })
})

module.exports = router