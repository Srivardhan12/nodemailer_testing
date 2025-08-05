const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

const mailOptions = {
  form: process.env.MAIL,
  to: "slinterop@gmail.com",
  subject: "Testing mail service",
  // text: "we can also send text like this"
  html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome Email</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f6fa;">
  <table width="100%" bgcolor="#f5f6fa" cellpadding="0" cellspacing="0" style="padding: 30px 0;">
    <tr>
      <td>
        <table align="center" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color: #4a90e2; color: white; padding: 20px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Welcome to Our Service 🎉</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <p style="font-size: 16px; color: #333333;">
                Hi user,
              </p>
              <p style="font-size: 16px; color: #333333;">
                We're excited to have you on board. Thank you for joining us!
              </p>
              <p style="font-size: 16px; color: #333333;">
                To get started, simply click the button below to verify your email address:
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="{{verificationLink}}" style="background-color: #4a90e2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px;">Verify Email</a>
              </div>
              <p style="font-size: 14px; color: #888888;">
                If you did not sign up for this account, you can ignore this email.
              </p>
              <p style="font-size: 16px; color: #333333;">
                Best,<br/>
                The Team
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f0f0f0; text-align: center; padding: 15px; font-size: 12px; color: #888888;">
              © 2025 Your Company. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    console.log("MAIL SEND SUCESSFULLY: ", info);
  }
});

app.listen(process.env.PORT, () => {
  console.log("SERVER STARTED");
});
