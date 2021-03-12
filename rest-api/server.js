

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const authApiRoutes = require('./routes/authApiRoutes')

var options = {
    "origin": { "Access-Control-Allow-Origin": "*" },
    "methods": "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
    "headers": "Origin, Content-Type, X-Auth-Token, X-JSON",
    "preflightContinue": true
}

// app.use(cors(options))
app.use(cors("*"))
// app.all('/', function(req, res, next) {
//     // res.header("Access-Control-Allow-Origin", "*");
//     // res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, X-JSON");
//     // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
//     next()
//   });
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


