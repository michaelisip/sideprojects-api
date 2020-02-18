const { Router } = require('express');
const nodemailer = require('nodemailer');
const { resolve } = require('path');
const fs = require('fs');

const router = Router();

router.get('/', async (req, res, next) => {
  fs.readFile(resolve(__dirname, '../data.json'), (err, json) => {
    if (err) next(err);
    const data = JSON.parse(json);
    res.json({ data });
  });
});

router.post('/resume/request', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_MAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: `MichaelJohn Isip <${process.env.GOOGLE_MAIL}>`,
    subject: `Resume Request | ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500);
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(201);
    }
  });
});

module.exports = router;
