const mongoose = require('mongoose')

const FeedbackModel = new mongoose.Schema({
    feedBackDes : {
        required : true,
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,        
        required : true,
        ref : 'Users'
    },    
})

module.exports = mongoose.model('feedback',FeedbackModel)