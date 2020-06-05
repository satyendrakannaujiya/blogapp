const mongoose = require('mongoose')

const topicSchema = mongoose.Schema({
    title:{type:String}
})

module.exports = mongoose.model('Topic',topicSchema);