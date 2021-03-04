

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Working' })
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})
// app.listen(5000, console.log.bind(console, 'Server is listening on port 5000'))


