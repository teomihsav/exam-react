



const express = require('express')
const router = express.Router();
const passport = require('passport')
const ProfileJob = require('../models/ProfileJob')
const apiValidateJobsArticle = require('../validationApi/apiValidateJobsArticle')
const apiValidateEmailContactJob = require('../validationApi/apiValidateEmailContactJob')

const nodemailer = require('nodemailer');

router.post('/saveJobsAswers', passport.authenticate('jwt', { session: false }), (req, res) => {

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
                // console.log('Api:', profile)
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

    ProfileJob.find()
        .then(profile => {
            if (profile) { // console.log('Api TakeJobsToFront:', profile)
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

    console.log('takeJobsToFrontMatchedJobs data: ', req.body.id)
    let profileAnswers = {}

    ProfileJob.findById(req.body.id)
        .populate('client', ['email'])
        .then(profile => {
            // console.log('Api takeJobsToFrontMatchedJobs:', profile)
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

    let mailOptions = {
        from: req.body.emailClient,
        to: req.body.emailJob,
        subject: req.body.values.subject,
        text: req.body.values.message,
        html: req.body.values.message
    }

    const { errors } = apiValidateEmailContactJob(req.body)

    if (Object.keys(errors).length > 0) {                          
        return res.status(400).json(errors);
    }

    transporter.sendMail(mailOptions, function (errors, info) {
        if (errors) {
            res.status(404).json({ errors: error = 'Error, mail is nor sent!' });
        } else {
            res.status(250).json({ success: info.response });
        };
    });
});

router.get('/takeAllArticles', (req, res) => {

    console.log('Response takeAllArticles')

    let arrayArticles = []

    ProfileJob.find()
        .then(profile => {
            if (profile) { // console.log('Api TakeJobsToFront:', profile)
                profile.map(el => {
                    // console.log(el.articles)
                    arrayArticles.push(el.articles)
                })
                return res.status(200).json(arrayArticles)
            } else {
                console.log('Error, no data:')
                res.end().json()
            }
        })
        .catch(err => {
            console.log(err.response)
        })
})

router.post('/takeJobsUserArticles', (req, res) => {

    ProfileJob.find({ client: req.body.id })
        .then(profile => {
            console.log('Api takeJobsUserArticles:', profile)
            return res.status(200).json(profile)
        })
        .catch(err => {
            console.log(err.response)
        })
})

router.post('/saveArticle', passport.authenticate('jwt', { session: false }), (req, res) => {

    let articleID = req.body.values._id

    const { errors } = apiValidateJobsArticle(req.body)

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors)
    }

    let articles = {
        title: req.body.values.title,
        article: req.body.values.article,
        category: req.body.values.category
    }

    ProfileJob.findOne({ 'client': req.user.id, 'articles._id': articleID })
        .then(profile => {
            // res.json(profile)
            console.log('Articles after having a profile: ', profile)
            if (profile) {
                ProfileJob.updateOne(
                    { client: req.user.id, 'articles._id': articleID },
                    { $set: { 'articles.$': articles } },
                    { new: true }
                )
                    .then(profile => {
                        res.json(profile)
                        console.log(profile)
                    }).catch(err => {
                        console.log(err)
                    })
            }
            else {
                console.log('Articles before save: ', articles)
                ProfileJob.findOne({ client: req.user.id })
                    .then(profile => {
                        if (profile)
                            profile.articles.unshift(articles);
                        profile.save().then(profile => res.json(profile));
                    })
            }
        })
})

router.post('/loadArticleForEdit', passport.authenticate('jwt', { session: false }), (req, res) => {

    console.log('loadArticleForEdit data: ', req.body.id)
    console.log('Logged user ID data: ', req.user.id)

    ProfileJob.find({ client: req.user.id }, { articles: { $elemMatch: { _id: req.body.id } } })
        .then(profile => {
            console.log('Api loadArticleForEdit:', profile)
            return res.status(200).json(profile)
        })
        .catch(err => {
            console.log(err.response)
        })
})

router.delete('/delArticleAction/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    ProfileJob.findOne({ client: req.user.id }).then(profile => {
        // Get remove index
        const removeIndex = profile.articles
            .map(el => el._id)
            .indexOf(req.params.id)
        profile.articles.splice(removeIndex, 1);
        profile.save().then(profile => res.json(profile));
    })
        .catch(err => res.status(404).json(err));
});

module.exports = router