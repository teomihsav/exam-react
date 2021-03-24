
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const ProfileJob = require('../models/ProfileJob')
const Client = require('../models/Client')
const apiValidateRegistration = require('../validationApi/apiValidateRegister')
const apiValidateLogin = require('../validationApi/apiValidateLogin')


const errors = {}

router.post('/jobAnswers', passport.authenticate('jwt', { session: false }), (req, res) => {

    // const { errors } = apiValidateRegistration(req.body)

    // if (Object.keys(errors).length > 0) {
    //     return res.status(400).json(errors);
    // } else {

    console.log('Response: ', req.body)

    let profileJobAnswers = {}
    profileJobAnswers.client = req.user.id
    profileJobAnswers.username = req.user.username
    profileJobAnswers.jobChoiceOne = req.body.jobChoiceOne
    profileJobAnswers.jobChoiceTwo = req.body.jobChoiceTwo
    profileJobAnswers.jobChoiceThree = req.body.jobChoiceThree
    profileJobAnswers.image = req.body.image
    profileJobAnswers.description = req.body.description

    ProfileJob.findOne({ client: req.user.id })
        .then(profile => {
            if (profile) {
                console.log(profile)
                errors.profileAlreadyDone = 'You already did answer this question'
                return res.status(404).json(errors); // On found "answers" at DB returns errors and display it at page form
            } else {
                new ProfileJob(profileJobAnswers)
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

    ProfileJob.findOne({ client: req.user.id })
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

router.get('/takeJobsToFront', (req, res) => {

    console.log('Response takeJobsToFront')

    let profileAnswers = {}

    ProfileJob.find()
        .then(profile => {
            if (profile) {
                console.log('Api TakeJobsToFront:', profile)
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