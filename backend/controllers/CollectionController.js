const collection = require('../models/CollectionModel')

module.exports.getCollection = async (req,res,next) =>{
    const item_per_page = 3
    const page  = req.query.page || 1
    const skip = (page - 1 ) * item_per_page

    try {
        const count = await collection.estimatedDocumentCount({})
        const pageCount = count / item_per_page

        const data = await collection.find({})  
        .limit(item_per_page)
        .populate('course')
        .skip(skip)
        
        res.json({ pagination : {
            count,
            pageCount
        }, data })

    } catch (error) {
        next(error)
    }
}