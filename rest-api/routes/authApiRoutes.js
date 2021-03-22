
const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const Client = require('../models/Client')
const apiValidateRegistration = require('../validationApi/apiValidateRegister')
const apiValidateLogin = require('../validationApi/apiValidateLogin')
const jwt = require('jsonwebtoken')
const keys = require('../config/kyes');

const errors = {}

router.post('/register', (req, res) => {

    const { errors } = apiValidateRegistration(req.body)

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    } else {

        console.log(req.body.typeUser)

        Client.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    errors.email = 'The user with that mail exists!'
                    return res.status(400).json(errors);
                } else {
                    const user = new Client({
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password,
                        typeUser: req.body.typeUser,
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
    Client.findOne({ email })
        .then(user => {
            console.log(user)
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
                        const payload = { id: user.id, name: user.username, typeUser: user.typeUser } // Create JWT payload
                        // Sign Token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 43200 },
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