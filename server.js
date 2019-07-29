
require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()
const PORT = process.env.PORT || 3001
// const nodemailer = require('nodemailer')

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.email,
//         pss: process.env.password
//     }
// })

require('./routes')(app)
        
app.listen(PORT, _ => {console.log('app running')})
          
