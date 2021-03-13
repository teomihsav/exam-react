
const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/User')
const apiValidateRegistration = require('../validationApi/apiValidateRegister')

const errors = {}

router.post('/register', (req, res) => {

    const { errors } = apiValidateRegistration(req.body)

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    } else {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    errors.email = 'The user with that mail exists!'
                    return res.status(400).json(errors);
                } else {
                    const user = new User({
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password,
                        verifiedUserByEmail: false
                    })
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(user.password, salt, (err, hash) => {
                            if (err) throw err;
                            user.password = hash;
                            user.save()
                                .then(user => {
                                    res.json(user)
                                })
                                .catch(err => console.log(err));
                            // res.json({ message: 'Registration' })
                        })
                    })
                }
            })
    }
})


// router.post('/register', (req, res) => {

//     let user = new User(req.body)

//     user.save()
//     .then(createdUser => {
//         console.log(createdUser)
//         res.status(201).json({ message: createdUser._id })
//     })
//     // res.json({ message: 'Registration' })
// })

// app.get('/auth/login', (req, res) => {
//     res.json({ message: 'Login' })
// })

module.exports = router