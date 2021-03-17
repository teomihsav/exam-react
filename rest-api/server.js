

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const authApiRoutes = require('./routes/authApiRoutes')
const clientProfileRoutes = require('./routes/clientProfileRoutes')
const passport = require('passport');

app.use(cors("*"))

app.use(express.json())

mongoose.connect('mongodb://localhost/imatch', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to DB')
});

// Passport middleware
app.use(passport.initialize());
// Passport Config
require('./config/passport.js')(passport);

app.use('/auth', authApiRoutes);
app.use('/clientProfie', clientProfileRoutes);


app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})
// app.listen(5000, console.log.bind(console, 'Server is listening on port 5000'))


