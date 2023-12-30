const category = require('../models/categroyModel')

module.exports.getAllCat = async (req,res,next) =>{
    try {
        const data = await category.find({})
        
        res.json(data)

    } catch (error) {
        next(error)
    }
}

module.exports.getSingleCat = async(req,res) =>{
    try {
        
    } catch (error) {
        next(error)
    }
}