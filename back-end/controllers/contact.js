
const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const Contact = require('../modals/contactModel');
const Topic = require('../modals/topicModel');
const helper = require('../helpers/helpers');
const config = require('config');

module.exports = {
       async createContact(req,res){
        var name = req.body.name;
        var  email = req.body.email;
        var  message = req.body.message;

        if(name && email && message){

            let data = {
                    name:name,
                    email:email,
                    message:message
            }
            Contact.create(data).then(data=>{
                  res.status(HttpStatus.OK).json({message:"Contact is saved success fully",data});
            },err=>{
                  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occured ",err});
            })
       }
       else{
           res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occured"});
       }
}
}