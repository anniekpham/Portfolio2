require('dotenv').config()
const nodemailer = require('nodemailer')

module.exports = (app) => {
    app.post('/send', (req, res) => {
        let message = {
            from: req.body.from,
            to: process.env.email,
            subject: req.body.subject,
            text: req.body.message
        }
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.email,
                pass: process.env.pw
            }
        })
        transporter.sendMail(message, (e, data) =>{
            if (e) {
                console.log(e)
            } else {
                res.json(data)
            }
        })
        
    })
}
