import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default function sendData(req, res) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass,
    },
    secure: true,
  });

  const mailData = {
    from: 'teodorbriceanu@gmail.com',
    to: 'teodorbriceanu@gmail.com',
    subject: `Message From ${name}`,
    html: `
    <p>Sender: ${name}</p>
    <p>${email}</p>
    <p>${message}</p>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send('Failed to send email');
    } else {
      console.log(info);
      res.status(200).send('Message sent successfully');
    }
  });
}
