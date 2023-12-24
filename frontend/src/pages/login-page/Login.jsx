import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import './Login.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { loginRoute } from '../../utils/APIRoutes';

const Login = () => {
  const navigate = useNavigate()
  const [values,setValues] = useState({
    email : '',
    password : '',
  })

  const [errorEmail ,setErrorEmail] = useState('') 
  const [errorPassword ,setErrorPassword] = useState('') 

  const handleChange = (e) =>{
    setValues({...values, [e.target.name] : e.target.value})

    if(values.email || values.password ){
      setErrorEmail(values.email ? '' : 'กรุณากรอกอีเมลของคุณ')
      setErrorPassword(values.password ? '' : 'กรุณากรอกรหัสผ่าน')
    }
  }

  const handleLogin = async (e) =>{
    e.preventDefault()
    const { email,password } = values

    const { data } = await axios.post(loginRoute,{
      email,
      password
    })

    if(data.status === false){
      if(data.msg === 'ไม่พบอีเมล์ในระบบ'){
        setErrorEmail('ไม่พบอีเมล์ในระบบ')
      } else if(data.msg === 'กรุณากรอกรหัสผ่าน'){
        setErrorPassword('กรุณากรอกรหัสผ่าน')
      }
    } else {
      localStorage.setItem('course-user',JSON.stringify(data.data))
      navigate('/')
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('course-user')){
      navigate('/')
    }
  },[])

  return (
    <div className='container-login'>
      <div className='text-register'>
        <img
          src='../src/assets/register-assets/futureskill_logo.jpg'
          alt='future-skill'
        />
        <h2>Past<span className='span-register'>Skill</span></h2>
      </div>
      <form className='Box-login' onSubmit={handleLogin}>
        <div className='topic-login'>
          <h3>เข้าสู่บัญชี Pastskill ของคุณ</h3>
          <h6>เรียนรู้คอร์สเรียนกับ<span>ผู้เชี่ยวชาญจากหลากหลายสาขา</span></h6>        
        </div>
        <input
          className={`register-input ${errorEmail === '' ? '' :'error'}`}
          type='text'
          placeholder='อีเมล'
          name='email'
          onChange={(e)=>handleChange(e)}
        />
        <div className='error-msg'>{errorEmail}</div>
        <input
          className={`register-input ${errorPassword === '' ? '' :'error'}`}
          type='password'
          placeholder='รหัสผ่าน'
          name='password'
          onChange={(e)=>handleChange(e)}
        />
        <div className='error-msg'>{errorPassword}</div>
        <div className='div-fgp'>
          <Link to='/register' className='forget-pass'>
            ลืมรหัสผ่าน ?
          </Link>          
        </div>
        <button 
          type='submit' 
          className='btn-register'
        >เข้าสู่ระบบ</button>
        <h5>ยังไม่เป็นสมาชิก<Link to='/register' className='Link Login'>คลิกเพื่อสมัครสมาชิก</Link></h5>
      </form>
      <div className='div-back-to-first-page'>
        <Link to='/' className='back-to-first-page'>
          <FaArrowLeftLong /><span>กลับหน้าแรก</span>
        </Link>
      </div>
    </div>
  )
}

export default Login