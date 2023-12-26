import { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './OtpConfirm.css'
import { sendOtpRoute, verifyOtpRoute } from '../../utils/APIRoutes';

const OtpConfirm = () => {
    const navigate = useNavigate()
    const [ otp,setOtp ] = useState('')
    const [errorOtp, setErrorOtp] = useState('')

    let user = localStorage.getItem('course-user')
    let user_new = JSON.parse(user)

    const handleSendOTP = async (e) =>{
        e.preventDefault()
        const { email } = user_new
        const { data } = await axios.post(sendOtpRoute,{
            email,
            subject : "email Verification",
            message : "Verification your email with the code below",
        })
        console.log(data);        
    }
    
    const handleVerifyOTP = async (e) =>{
        e.preventDefault()
        const { email } = user_new
        const { data } = await axios.post(verifyOtpRoute,{
            email,
            otp
        }) 

        if(data.valid === true){ 
            user_new.isValidation = true
            localStorage.setItem('course-user',JSON.stringify(user_new))       
            navigate('/')
        } else{
            setErrorOtp('เกิดข้อผิดพลาด กรุณาลองส่ง OTP ใหม่อีกครั้ง')
        }
    }
    
    useEffect(()=>{
        if(localStorage.getItem('course-user')){
            if(user_new.isValidation){
                navigate('/')            
            }   
        } else{
            navigate('/login')
        }
    },[])

    return (
        <div className='otp-confirm-container'>
            <div className='box-otp'>
                <div className='text-register'>
                    <img
                        src='../src/assets/register-assets/futureskill_logo.jpg'
                        alt='future-skill'
                    />
                    <h2>Past<span className='span-register'>Skill</span></h2>
                </div>
                <form className='input-otp-box' onSubmit={(e)=>handleVerifyOTP(e)}>
                    <h5 className='otp-h5'>ระบบได้ส่งรหัส OTP ไปยังเบอร์โทรศัพท์ <span>Email</span> หากไม่ได้รับสามารถกดขอรหัสใหม่</h5>
                    <h4 onClick={(e)=>handleSendOTP(e)}>ขอรหัส OTP ใหม่</h4>
                    <p>รหัส OTP ที่ได้รับ (โปรดระบุภายในเวลา 1 นาที)</p>
                    <div className='form-input-otp'>
                        <input
                            type='text'
                            placeholder='กรอกรหัส OTP 4 หลัก'
                            className='input-otp'
                            onChange={(e)=> {
                                setErrorOtp(otp ? '' : 'เกิดข้อผิดพลาด กรุณาลองส่ง OTP ใหม่อีกครั้ง')
                                setOtp(e.target.value)
                            }}
                        />
                        <div className='error-msg'>{errorOtp}</div>
                        <button className='btn-otp' type='onsubmit'>ยืนยัน OTP</button>
                        <button className='btn-otp back' onClick={()=>navigate('/register')}>กลับ</button>
                        <p>เมื่อคุณกด “ยืนยันรหัส OTP” ถือว่าคุณได้ยอมรับ <span>ข้อกําหนดการใช้งาน</span></p>
                    </div>   
                </form>
            </div>
        </div>
    )
}

export default OtpConfirm