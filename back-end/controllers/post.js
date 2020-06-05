
const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const Blog = require('../modals/blogModels');
const Topic = require('../modals/topicModel');
const helper = require('../helpers/helpers');
const config = require('config');

module.exports = {
      async getPosts(req,res){
            const posts = await Blog.find({}).sort([['createdAt',-1]]);

            if(posts){
                  res.status(HttpStatus.OK).json({message:"Post fetched successfully ",posts});
            }
            else{
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occured "});
            }
      },
      async getPostById(req,res){
             id = req.params.id;
           
             Blog.findById(req.params.id).then(post=>{
                     res.status(HttpStatus.OK).json({message:"Get data by id",post});
             }).catch(e=>{
                     res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occured",e});
             })
      },
      async deletePost(req,res){
            console.log("Within delete api ");
             id = req.params.id;
             Blog.deleteOne({_id:id},function(err){
                     if(err){
                           res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occure",err}); 
                       }
                       else{
                             res.status(HttpStatus.OK).json({message:"Successfully deleted"});
                       }
             })
      },
      async updatePostById(req,res){
              id = req.params.id;
              var title = req.body.title;
              var  desc = req.body.description;
              var  topics = req.body.topics;
              var blog = req.body.blog;
              var posted_by = req.body.posted_by;
              if(title && desc && topics && blog && posted_by){
               let data = {
                   title:title,
                   description:desc,
                   topics:topics,
                   posted_by:posted_by,
                   blog:blog,
                   createdAt : new Date()
               }
               var query = {'_id': id};
               Blog.findOneAndUpdate(query,data,{upsert:true},function(err,post){
                        if(err){
                               return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occured",err});
                        }
                        else{
                               return res.status(HttpStatus.OK).json({message:"Successfully updated docs",post});
                        }
               })

        }
        else{
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error occured'});
        }
   },
   async getPostByTag(req,res){
      console.log("Tag nam eis ");
          tag = req.params.tag;
          console.log("Tag nam eis "+tag);
          Blog.find({"topics":tag}).then(posts=>{
                res.status(HttpStatus.OK).json({message:"Get data by id",posts});
          }).catch(err=>{
              res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occured",err});
         })
     },
async searchPost(req,res){
        console.log("req body "+req.params.search);

         Blog.find({$text:{$search:req.params.search}}).then(posts=>{
                  res.status(HttpStatus.OK).json({message:"Data by search keyword ",posts});
         }).catch(err=>{
               res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:"Some error occure",err});
         })
}


}
