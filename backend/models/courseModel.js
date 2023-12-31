const mongoose = require('mongoose')

const courseModel = new mongoose.Schema({
    courseName : {
        type : String,
        required : true
    },
    difficulty : {
        type : String,
        required : true
    },
    userCreate : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users'
    },
    coursePrice : {
        type : Number,
        required :true
    },
    courseVideo : {
        type : String,
    },
    courseImg : {
        type : String,
        required : true        
    }, 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categorys',
    },
},
    {
        timestamps : true
    }
)

module.exports = mongoose.model('course',courseModel)

// course_name, difficulty , user_create , course_price ,course_video , course_img , timestemp