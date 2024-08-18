import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from 'config';

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors({
  origin: 'https://portfolio-v1-ecru-nine.vercel.app', // Replace with your domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware to parse JSON
app.use(bodyParser.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shaikhhanzala27@gmail.com',
    pass: config.get('PASS')
  },
});

// Handle /send-email route
app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  console.log(firstName, lastName, email, message);

  const mailOptions = {
    from: email,
    to: 'shaikhhanzala27@gmail.com',
    subject: `Portfolio Message from ${firstName} ${lastName}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Handle root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
