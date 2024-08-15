const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("config");

const app = express();
const port = process.env.PORT || 5000;
const pass = config.get("PASS");

app.use(cors({
  origin: 'https://portfolio-v1-b9wu.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'], // Allow necessary methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow necessary headers
}));

// Handle preflight requests
app.options('/send-email', cors());

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "shaikhhanzala27@gmail.com",
    pass: pass,
  },
});

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "shaikhhanzala27@gmail.com",
    subject: `Portfolio Message from ${firstName} ${lastName}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully ..." });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
