
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

    console.log('Response', res)

    let profileAnswers = {}
    profileAnswers.client = req.user.id
    profileAnswers.username = req.user.username
    profileAnswers.AnswerOne = req.body.AnswerOne
    profileAnswers.AnswerTwo = req.body.AnswerTwo
    profileAnswers.AnswerThree = req.body.AnswerThree

    ProfileClient.findOne({ client: req.user.id })
        .then(profile => {
            if (profile) {
                console.log(profile)
                errors.profileAlreadyDone = 'You already did answer this question'
                        return res.status(404).json(errors);
            } else {
                new ProfileClient(profileAnswers)
                    .save()
                    .then(profile => res.json(profile));
                console.log('After user auth: ', profile)
            }

        })
    // }
})

module.exports = router