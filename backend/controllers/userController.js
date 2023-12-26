const User = require("../models/userModel")
const bcrypt = require('bcrypt');

module.exports.register = async (req,res,next) =>{
    try {
        const { email,password,firstName,lastName,isChecked,telephone } = req.body
        const email_check  = await User.findOne({ email })

        if(email_check){
            return res.json({msg : 'Email ของท่านถูกใช้งานแล้ว',status : false})
        }
        
        const hashPassword = await bcrypt.hash(password,10)
        const user = await User.create({
            email,
            firstName,
            lastName,
            telephone,
            isChecked,
            password : hashPassword,
            isValidation : false
        })

        delete user.password
        return res.json({data : user ,status :  true})
    } catch (error) {
        next(error)
    }
}

module.exports.login = async (req,res,next) =>{
    try {
        const { email,password } = req.body
        const email_check = await User.find({ email })

        if(email_check){
            if(email_check.length === 0){
                return res.json({msg : 'ไม่พบอีเมล์ในระบบ' ,status : false })                
            }else{
                await bcrypt.compare(password,email_check[0].password,(err,result)=>{
                    if(result === true){
                        return res.json({data : email_check[0] ,status : result })
                    } if (result === false){
                        return res.json({msg : 'กรุณากรอกรหัสผ่าน', status : result})                    
                    }
                })
            }
        }
    } catch (error) {
        next(error)
    }
}
