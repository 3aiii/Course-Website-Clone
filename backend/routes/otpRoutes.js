const { sendOTP,verifyOTP } = require("../controllers/otpController");
const { findOne, findOneAndUpdate } = require("../models/userModel");
const User = require("../models/userModel")

const router = require("express").Router();

router.post('/', async(req,res)=>{
    try {
        const { email,subject,message,duration } = req.body
        const createOTP = await sendOTP({
            email,
            subject,
            message,
            duration
        })

        res.status(200).json(createOTP)

    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.post('/verify', async(req,res)=>{
    try {
        let { email,otp } = req.body
        const validOTP = await verifyOTP({ email,otp })
        
        const updatedUser = await User.findOneAndUpdate({ email }, { isValidation: true }, { new: true });          
        res.status(200).json({ valid : validOTP ,data : updatedUser})
        
    } catch (error) {
        res.status(400).send(error.message)        
    }
})

module.exports = router