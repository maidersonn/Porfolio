const nodemailer = require("nodemailer");

function sendEmail(subject, text) {
  return new Promise((resolve, reject) => {
    const smtpTrans = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const mailOpts = {
      to: process.env.MAIL_USER,
      subject: subject,
      text: text,
    };

    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}

module.exports = sendEmail;
