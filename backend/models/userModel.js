const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    email : {
        type : String,
        required: true,
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    telephone : {
        type : Number,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    isChecked : {
        type : Boolean,
        require : true
    },
},
    {
        timestamps : true
    }
)

module.exports = mongoose.model("Users",UserModel)