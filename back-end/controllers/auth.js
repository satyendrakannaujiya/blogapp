
const joi = require('joi');
const HTTPStatus = require('http-status-codes');
const User = require('../modals/userModels');
const helper = require('../helpers/helpers');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = {
    async createUser(req,res){
        const schema = joi.object().keys({
              username:joi.string().required(),
              email:joi.string().email().required(),
              password:joi.string().required()
        });
        const {error,value} = joi.validate(req.body,schema);


        if(error && error.details){
              return res.status(HTTPStatus.BAD_REQUEST).json({message:error.details})
        }

        const userEmail = await User.findOne({
            email:helper.lowerCase(req.body.email)
        });
        if(userEmail){
               return res.status(HTTPStatus.CONFLICT).json({message:"Email already exist"});
        }

        return bcrypt.hash(value.password,10,(error,hash)=>{
                if(error){
                     return res.status(HTTPStatus.BAD_REQUEST).json({message:"Bad request "});
                }
                const body = {
                    username : helper.firstUpper(value.username),
                    email: helper.lowerCase(value.email),
                    password:hash
                }

                User.create(body).then((user)=>{
                    const token = jwt.sign({data:user},config.get("keys.json_secret_key"),{
                          expiresIn:"1h"
                    });
                    res.cookie('auth',token);
                    res.status(HTTPStatus.CREATED).json({message:"User created successfully",user,token})
                }).catch(err=>{
                      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({message:"Error occured"})
                })
        });


    },
    async loginUser(req,res){

      
        email = helper.lowerCase(req.body.email);
        password = req.body.password;

            user = await User.findOne({
                email:email
            })

            if(!user){
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({message:"Email does not exist"}); 
            }
            

            bcrypt.compare(password,user.password,(err,result)=>{
                   if(err){
                         res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({message:"Email or password does not exist"});
                   }
                   if(result){
                        
                            const token = jwt.sign({data:user},config.get("keys.json_secret_key"),{
                                   expiresIn:"1h"
                            })

                            res.cookie('auth',token);
                            res.status(HTTPStatus.OK).json({message:"User has successfully loged in !",user,token});
                        }
                   else{
                        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({message:"Password is incorrect"});
                   }

            })

           
       


    }
}