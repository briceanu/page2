import { mailOptions, transporter } from '@/lib/nodemailer';

const handler = async (req, res) => {
  const { name, email, message } = req.body;
  if (req.method === 'POST') {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }
    if (name.trim() === '') {
      return res.status(400).json({ message: 'Name is required' });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        from: 'teodorbriceanu@gmail.com',
        to: 'teodorbriceanu@gmail.com',
        subject: 'this is a mail from your website',
        html: `
        <p>Sender: ${name}</p>
        <p>${email}</p>
        <p>${message}</p>
        `,
      });
      return res.status(200).json({ sucess: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
};
export default handler;
