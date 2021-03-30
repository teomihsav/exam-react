
const express = require('express')
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcrypt')
const ProfileJob = require('../models/ProfileJob')
const Client = require('../models/Client')
const apiValidateRegistration = require('../validationApi/apiValidateRegister')
const apiValidateLogin = require('../validationApi/apiValidateLogin')
const mx = require('./mx')

const nodemailer = require('nodemailer');
// const key = require('../../config/mxKey');

router.post('/jobAnswers', passport.authenticate('jwt', { session: false }), (req, res) => {

    // const { errors } = apiValidateRegistration(req.body)

    // if (Object.keys(errors).length > 0) {
    //     return res.status(400).json(errors);
    // } else {

    console.log('Response: ', req.body)

    let profileJobAnswers = {}
    profileJobAnswers.client = req.user.id
    profileJobAnswers.username = req.user.username
    profileJobAnswers.one = req.body.one
    profileJobAnswers.two = req.body.two
    profileJobAnswers.three = req.body.three
    profileJobAnswers.image = req.body.image
    profileJobAnswers.description = req.body.description

    ProfileJob.findOne({ client: req.user.id })
        .then(profile => {
            if (profile) {
                ProfileJob.findOneAndUpdate(
                    { client: req.user.id },
                    { $set: profileJobAnswers },
                    { new: true }
                ).then(profile => res.json(profile))
                //console.log(profile)
                //errors.profileAlreadyDone = 'You already did answer this question'
                // return res.status(404).json(errors); // On found "answers" at DB returns errors and display it at page form
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
                // console.log('Api TakeJobsToFront:', profile)
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

router.post('/takeJobsToFrontMatchedJobs', (req, res) => {

    console.log('Arr data: ', req.body.id)
    let profileAnswers = {}

    ProfileJob.findById(req.body.id)
        .populate('client', ['email'])
        .then(profile => {
            console.log('Api takeJobsToFrontMatchedJobs:', profile)
            return res.status(200).json(profile)
        })
        .catch(err => {
            console.log(err.response)
        })
})

const transporter = nodemailer.createTransport({
    host: "ben.bg",
    port: 465,
    secure: true,
    auth: {
        user: 'ben@ben.bg', 
        pass: 'po282rigorexh' 
    }
})

router.post('/sendEmail', (req, res) => {
    console.log('Data from Front at beckend: ', req.body)

    let mailOptions = {
        from: req.body.emailClient, 
        to: req.body.emailJob,
        subject: req.body.values.subject, 
        text: req.body.values.message, 
        html: req.body.values.message
    }

    transporter.sendMail(mailOptions, function (errors, info) {
        if (errors) {
            res.status(404).json({ errors: error = 'Error, mail is nor sent!' });
        } else {
            res.status(250).json({ success: info.response });
        };
    });
});

module.exports = router