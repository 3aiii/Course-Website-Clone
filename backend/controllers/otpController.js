const OTP = require("../models/otpModel")
const generateOTP = require("../utils/generateOTP");
const {hashData,verifyHashedData} = require("../utils/hashData");
const sendEmail = require("../utils/sendEmail");
require("dotenv").config();

const verifyOTP = async ({ email,otp })=>{
    try {
        if(!( email && otp )){
            throw Error("Provide values for email, otp")
        } 
        
        // ensure otp record exist
        const matchOTPRecord = await OTP.findOne({ email })
        
        if(!matchOTPRecord){
            throw Error("No otp records found.")
        }

        const { expiresAt } = matchOTPRecord

        // checking for expired code
        if (expiresAt < Date.now()){
            await OTP.deleteOne({ email })
            throw Error("Code has expired. Request for a new one.")
        }

        // not expired yet, verify value
        const hashOTP = matchOTPRecord.otp
        const validOTP = await verifyHashedData(otp,hashOTP)
        return validOTP

    } catch (error) {
        throw error
    }
}

const sendOTP = async ({ email,subject,message,duration = 1 }) =>{
    try {
        if( !(email && subject && message) ){
            throw Error("Provide values for email, subject , message")
        }

        // clear any old record
        await OTP.deleteOne({ email })
        
        // generate pin in utills folder 
        const generate = await generateOTP()

    // send email
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject,
        html: `
            <div style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; padding: 20px; text-align: center;">
                <p style="font-size: 18px;">${message}</p>                
                <div style="background-color: #ffffff; border: 1px solid #ddd; border-radius: 5px; padding: 20px; margin-top: 20px;">
                    <p style="font-size: 25px; color: tomato; letter-spacing: 2px; margin-bottom: 10px;"><b>${generate}</b></p>
                    <p style="font-size: 16px; color: #555;">This code <b>expires in ${duration} hour</b>.</p>
                </div>
            </div>
        `
    };

        await sendEmail(mailOptions)

        // save otp record
        const hashOTP = await hashData(generate)
        const newOTP = await new OTP({
            email,
            otp : hashOTP,
            createdAt : Date.now(),
            expiresAt : Date.now() +360000 * + duration,
        })

        const createdOTPRecord = await newOTP.save() // insert otp row into db
        return createdOTPRecord

    } catch (error) {
        throw error
    }
} 

const deleteOTP = async (email)=>{
    try {
        await OTP.deleteOne({ email })

    } catch (error) {
        throw error
    }
}

module.exports = { sendOTP,verifyOTP } 