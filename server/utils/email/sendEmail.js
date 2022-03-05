require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (name, email, subject, message) => {
  // create reusable transporter object using the default SMTP transport

  console.log("Email Username", process.env.EMAIL_USERNAME);
  console.log("Email Password", process.env.EMAIL_PASSWORD);
  console.log("Email BCC", process.env.EMAIL_BCC);

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const options = () => {
      return {
        from: `${email}`,
        to: process.env.EMAIL_USERNAME,
        cc: process.env.EMAIL_BCC,

        subject,
        text: `${message}`,
        html: `
      <h3>Email from your homepage</h3>
      <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
      </ul>
      <h2>Subject: ${subject}</h2>
      <p>Message: ${message}</p>
      
      `,
      };
    };
    console.log("SENDING EMAIL ... ", options);

    transporter.sendMail(options(), (error, info) => {
      if (error) {
        reject(error);
        console.log("fail... ", error);
      } else {
        resolve(true);
        console.log("All done send");
      }
      
    });
  });
};

module.exports = sendEmail;
