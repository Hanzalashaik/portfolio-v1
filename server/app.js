import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';


const app = express();
const port = process.env.PORT || 5000;

// Configure CORS
app.use(cors({
  origin: ['https://portfolio-v1-b9wu.vercel.app', 'https://www.hanzala.site'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'shaikhhanzala27@gmail.com',
    pass: "rpkk puyt bgip dlvg" // Use environment variables or secure storage for sensitive data
  },
});

// Handle /send-email route
app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'shaikhhanzala27@gmail.com',
    subject: `Portfolio Message from ${firstName} ${lastName}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully ...' });
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
