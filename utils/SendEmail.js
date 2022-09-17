const nodemailer = require("nodemailer");

const SendEmail = async (EmailTo, EmailText, EmailSubject) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sirazclan@gmail.com",
      pass: "cfumlqxmtkknmtti",
    },
  });

  let mailOptions = {
    from: "Inventory Management System <sirazclan@gmail.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = SendEmail;
