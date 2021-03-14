
const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/User')
const apiValidateRegistration = require('../validationApi/apiValidateRegister')
const apiValidateLogin = require('../validationApi/apiValidateLogin')
const jwt = require('jsonwebtoken')


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

router.post('/login', (req, res) => {

    const { errors, isValid } = apiValidateLogin(req.body);    // Form request fields req.body

    // Check Validation
    if (Object.keys(errors).length > 0) {                           // console.log(Object.keys(errors).length)
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // find user by email
    User.findOne({ email })
        .then(user => {
            // Check for user
            if (!user) {
                errors.password = 'E-mail or password are wrong';
                return res.status(400).json(errors);
            }
            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User match
                        const payload = { id: user.id, name: user.name } // Create JWT payload
                        // Sign Token
                        jwt.sign(
                            payload,
                            keys = 'somekeyhere',
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        errors.password = 'E-mail or password are wrong';
                        return res.status(400).json(errors);
                    }
                })
        });
});

module.exports = router