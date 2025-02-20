import nodeMailer, { TransportOptions } from "nodemailer"

const sendEmail = async (options:TransportOptions) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

//  await sendEmail({
//    email: user.email,
//    subject: `Commerce Password Recovery`,
//    message,
//  });

module.exports = sendEmail;