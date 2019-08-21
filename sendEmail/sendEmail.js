var btnSubmit = document.getElementById('submit-footer');
btnSubmit.onclick = () => {
    var email = document.getElementById('email-input-footer').value;
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'flys2sky12081998@gmail.com',
            pass: 'd12081998'
        }
    });
    var mailOptions = {
        from: 'flys2sky12081998@gmail.com',
        to: email,
        subject: 'Wanderers',
        html: `<h1 style="text-align: center">Wellcome</h1>
    <h3 style="text-align: center">Thank you for choosing our service.</h3>
    <h5 style="text-align: center">You will receive the latest articles about European travel every week.</h5>`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}