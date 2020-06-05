const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    topics:[{type:String}],
    blog:{type:String},
    posted_by : {type:String},
    createdAt : { type: Date, default: Date.now()}

})

module.exports = mongoose.model('Blog',blogSchema);