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

module.exports.getSingleCat = async (req,res,next) =>{
    const id = req.params.id 
    const page = req.query.page || 1
    const item_per_page = 4
    // const query = {
    //     category : id
    // }
    const skip =  (page - 1) * item_per_page  

    try {
        const count = await course.countDocuments({ category : id })
        const pageCount = count / item_per_page
        
        if(id === "5fd63a065b89624c84cb21f2"){
            const count_all = await course.estimatedDocumentCount({})
            const pageCount = count_all / item_per_page

            const items = await course.find({})
            .populate('category')
            .populate('userCreate')
            .skip(skip)
            .limit(item_per_page)

            res.json({ pagination : {
                count,
                pageCount
            },items })

        } else{
            const items = await course.find({ category : id })
            .populate({path : 'category', select : 'name'})
            .populate('userCreate')
            .skip(skip)
            .limit(item_per_page)

            res.json({ pagination : {
                count,
                pageCount
            },items })      
        }
        
    } catch (error) {
        next(error)
    }
}
