const mongoose = require('mongoose')
const category = require('../models/categroyModel')
const course = require('../models/courseModel')

module.exports.getAllCat = async (req,res,next) =>{
    try {
        const data = await category.find({})
        
        res.json(data)

    } catch (error) {
        next(error)
    }
}

module.exports.getSingleCat = async(req,res,next) =>{
    
    try {
        const id = req.params.id || mongoose.Types.ObjectId('0')
        if(id === "0"){
            const data = await course.find({})
            .populate('category')
            .populate('userCreate')
            res.json({data})

        } else{
            const data = await course.find({ category : id })
            .populate({path : 'category', select : 'name'})
            .populate('userCreate')
    
            res.json({data})
        }
        
    } catch (error) {
        next(error)
    }
}