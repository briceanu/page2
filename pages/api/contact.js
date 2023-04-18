import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default function sendData(req, res) {
  const { name, email, message } = req.body;
  try {
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

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        console.log('Error', error);
      } else {
        console.log('Email sent' + info.response);
        res.status(202).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(201).json({ status: 401, error });
  }
}
