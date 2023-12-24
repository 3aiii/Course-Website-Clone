import { useNavigate } from 'react-router-dom'
import './OtpConfirm.css'

const OtpConfirm = () => {
    const navigate = useNavigate()
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
            <form className='input-otp-box'>
                <h5 className='otp-h5'>ระบบได้ส่งรหัส OTP ไปยังเบอร์โทรศัพท์ <span>Email</span> หากไม่ได้รับสามารถกดขอรหัสใหม่</h5>
                <h4>ขอรหัส OTP ใหม่</h4>
                <p>รหัส OTP ที่ได้รับ (โปรดระบุภายในเวลา 1 นาที)</p>
                <div className='form-input-otp'>
                    <input
                        type='text'
                        placeholder='กรอกรหัส OTP 4 หลัก'
                        className='input-otp'
                    />
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