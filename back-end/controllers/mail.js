const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const Blog = require('../modals/blogModels');
const Topic = require('../modals/topicModel');
const helper = require('../helpers/helpers');
const config = require('config');
const nodemailer = require('nodemailer');

module.exports ={
      async sendMail(req,res){
        //   console.log("Send mail" + JSON.stringify(req.body));
          let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"satyendra" <foo@example.com>', // sender address
    to: "satyendra250896@gmail.com,shoubhikdas.321@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

}