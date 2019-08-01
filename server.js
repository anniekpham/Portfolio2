
require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()
const PORT = process.env.PORT || 3001

// app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)
        
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, _ => {console.log('app running')})
          