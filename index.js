require('dotenv').config()

const nodemailer = require('nodemailer')
//step 2
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'entre the email addre you entered as from', //|| process.env.EMAIL,
        pass: 'enter you password' // || process.env.PASSWORD
    }
})
//step 2
let mailOptions = {
    from: 'enter the email you want to send email from',
    to: 'enter email addres you want o receive the email',
    subject: 'testing and testing!!!',
    text: 'Hey, your mail bort is working'
}
//step 3
transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('error occurrs: ')
    } else {
        console.log('email sent!!!')
    }
})