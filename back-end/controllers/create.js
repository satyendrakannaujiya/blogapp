
const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const Blog = require('../modals/blogModels');
const Topic = require('../modals/topicModel');
const helper = require('../helpers/helpers');
const config = require('config');

module.exports = {
       async createBlog(req,res){
            // console.log("blog api body "+JSON.stringify(req.body));
            var title = req.body.title;
           var  desc = req.body.description;
           var  topics = req.body.topics;
           var blog = req.body.blog;
           var posted_by = req.body.posted_by;

        //    console.log(title+'|'+desc+'|'+topics+'|'+blog+'|'+posted_by);

           if(title && desc && topics && blog && posted_by){
            let data = {
                title:title,
                description:desc,
                topics:topics,
                posted_by:posted_by,
                blog:blog,
                createdAt : new Date()
            }
            Blog.create(data).then(blog=>{
                res.status(HttpStatus.OK).json({message:" Blog is created ",blog});
                  
            }).catch(err=>{
                  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Error occured ",err});
            })
                 
        }
           else{
                 res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error occured'});
           }
       },

       async getTopics(req,res){

                const topic_list = await Topic.find();

                if(topic_list){
                      res.status(HttpStatus.OK).json({message:"topic fetched success fully",topic_list});
                }
                else{
                     res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occured "});
                }

       }
       
}

