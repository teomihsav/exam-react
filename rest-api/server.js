

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const authApiRoutes = require('./routes/authApiRoutes')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost/imatch', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to DB')
});

app.use('/auth', authApiRoutes);


app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})
// app.listen(5000, console.log.bind(console, 'Server is listening on port 5000'))


