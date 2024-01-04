const mongoose = require('mongoose')

const categoryModel = new mongoose.Schema({
    id : {
        require : true,
        type : String,
    },
    name : {
        require : true,
        type : String
    }, 
    childrens : {
        type : Array
    }
})

module.exports = mongoose.model('categorys',categoryModel)