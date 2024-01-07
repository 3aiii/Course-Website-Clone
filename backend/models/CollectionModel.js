const mongoose = require('mongoose')

const CollectionModel = new mongoose.Schema({
    collectionName : {
        type : String,
        required : true
    },
    course : [{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'course'
    }],
},
{
    timestamps : true
})

module.exports = mongoose.model('collections',CollectionModel)