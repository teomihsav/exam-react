




const mongoose = require('mongoose')

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/gettingstarted', {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('Connected to DB...')
});