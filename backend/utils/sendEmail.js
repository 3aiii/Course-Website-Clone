const nodemailer = require('nodemailer');
require("dotenv").config();

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
});

// test transporter
transporter.verify((err, success) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Ready for messages");
        console.log(success);
    }
});

const sendEmail = async (mailOptions) => {
    try {
        await transporter.sendMail(mailOptions); // Send mailOptions into your email
        return;
    } catch (error) {
        throw error;
    }
};

module.exports = sendEmail;
