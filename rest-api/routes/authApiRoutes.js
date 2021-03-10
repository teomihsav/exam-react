
const express = require('express')
const router = express.Router();

const User = require('../models/User')

// app.get('/', (req, res) => {
//     res.json({ message: 'Header Text' })
// })

router.post('/register', (req, res) => {  console.log('Data form API', req.body)
 
 // Validation on bacl-end
 
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        verifiedUserByEmail: false
    });
    user.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    // res.json({ message: 'Registration' })
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