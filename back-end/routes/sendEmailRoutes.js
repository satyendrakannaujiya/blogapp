const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


const mailCtrl = require('../controllers/mail');

router.post('/send',mailCtrl.sendMail);

module.exports = router;