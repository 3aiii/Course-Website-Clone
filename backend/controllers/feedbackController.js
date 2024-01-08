const feedbackModel = require('../models/feedbackModel')

module.exports.getFeedBack = async (req,res,next) =>{
    const id  = req.query.id

    try {
        if(id){
            const data = await feedbackModel.findById(id)
            .populate({ 
                path : 'user', 
                select : 'firstName lastName' 
            })
    
            res.json({ data , status : 'Have ID' })
        } else{
            const data = await feedbackModel.find({})
            .populate({ 
                path : 'user', 
                select : 'firstName lastName' 
            })
            res.json({ data, status : 'None ID' })
        }

    } catch (error) {
        next(error)
    }
}