const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes');

const config = require('config');

module.exports = {
    verifyToken:(req,res,next)=>{
         console.log("req.authrization "+JSON.stringify(req.headers));
           if(!req.headers.authorization) {
                 return res.status(HttpStatus.UNAUTHORIZED).json({message:"No Authirization"});
           } 

           const token  = req.cookies.auth || req.headers.authorization.split(' ')[1];
           if(!token){
                return res.status(HttpStatus.FORBIDDEN).json({message:"No token provided "});
           }

           return jwt.verify(token,config.get("keys.json_secret_key"),(err,decode)=>{
                 if(err){
                      if(err.expiredAt < new Date()){
                           return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Token has expired please login again",token:null});
                      }
                      next();
                 }
                 req.user = decode.data;
                 next();
           });
    }
}