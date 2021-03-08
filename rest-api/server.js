

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Header Text' })
})

app.get('/auth/registration', (req, res) => {
    res.json({ message: 'Registration' })
})
app.get('/auth/login', (req, res) => {
    res.json({ message: 'Login' })
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})
// app.listen(5000, console.log.bind(console, 'Server is listening on port 5000'))


