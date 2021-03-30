

const nodemailer = require('nodemailer');
// const key = require('../../config/mxKey');

const mx = (data) => {
    let transporter = nodemailer.createTransport({
        host: "ben.bg",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'ben@ben.bg', // generated ethereal user
            pass: 'po282rigorexh' // generated ethereal password
        }
    })
    console.log('Data from Front at beckend: ', data)

    let mailOptions = {
        from: '"Client" <teom@ben.bg>', // sender address
        to: 'contact@ben.bg', // data.emailJob
        subject: data.values.subject, // Subject line
        text: data.values.message, // plain text body
        html: 'Some body'
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Errors: ', error);
            let errors = 'E-mail is not sent'
            return errors
        } else {
            console.log('Response: ', info);
            return info
        }
    });
}

module.exports = mx;