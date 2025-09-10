"use strict";
const nodemailer = require("nodemailer");

module.exports.sendEmail = async (event) => {
  try {
    const { receiver_email, subject, body_text } = JSON.parse(event.body);

    if (!receiver_email || !subject || !body_text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "All fields are required!" }),
      };
    }

    // Ethereal account (testing only)
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Send email
    let info = await transporter.sendMail({
      from: `"Serverless Mailer" <${testAccount.user}>`,
      to: receiver_email,
      subject,
      text: body_text,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully (preview only)",
        previewURL: nodemailer.getTestMessageUrl(info),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending email",
        error: error.message,
      }),
    };
  }
};
