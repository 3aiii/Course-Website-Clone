import './Register.css'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from 'axios';
import { registerRoute } from '../../utils/APIRoutes';

const Register = () => {
    const navigate = useNavigate()
    const [values,setValues] = useState({
        email : "",
        firstName : "",
        lastName : "",
        telephone : "",
        password : "",
        confirmPassword : "",
        isChecked : false
    })

    const [errorEmail,setErrorEmail] = useState('')
    const [errorFirst,setErrorFirst] = useState('')
    const [errorLast,setErrorLast] = useState('')
    const [errorTel,setErrorTel] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorPasswordCon,setErrorPasswordCon] = useState('')
    const [ErrorCheck,setErrorCheck] = useState('')

    const handleChange = (e) =>{
        if(e.target.name == 'isChecked'){
            let bool = e.target.checked
            setValues({...values ,[e.target.name] : bool})
        }   else{
            setValues({...values ,[e.target.name] : e.target.value})
        } 
        
        if(values.email || values.firstName || values.lastName || values.telephone || values.password || values.confirmPassword ){
            setErrorEmail(values.email ? '' : 'กรุณากรอกอีเมลของคุณ')
            setErrorFirst(values.firstName ? '' : 'กรุณากรอกชื่อของคุณ')
            setErrorLast(values.lastName ? '' : 'กรุณากรอกนามสกุลของคุณ')
            setErrorTel(values.telephone ? '' : 'กรุณากรอกเบอร์โทรศัพท์')
            setErrorPassword(values.password ? '' : 'กรุณากรอกรหัสผ่านใหม่')
            setErrorPasswordCon(values.confirmPassword ? '' : 'กรุณายืนยันรหัสผ่านใหม่')
        } 
    }

    const handlevalidation = () => {
        let isValid = true;

        const fields = [
          { name: 'email', errorSetter: setErrorEmail, errorMessage: 'กรุณากรอกอีเมลของคุณ' },
          { name: 'firstName', errorSetter: setErrorFirst, errorMessage: 'กรุณากรอกชื่อของคุณ' },
          { name: 'lastName', errorSetter: setErrorLast, errorMessage: 'กรุณากรอกนามสกุลของคุณ' },
          { name: 'telephone', errorSetter: setErrorTel, errorMessage: 'กรุณากรอกเบอร์โทรศัพท์' },
          { name: 'password', errorSetter: setErrorPassword, errorMessage: 'กรุณากรอกรหัสผ่านใหม่' },
          { name: 'confirmPassword', errorSetter: setErrorPasswordCon, errorMessage: 'กรุณายืนยันรหัสผ่านใหม่' },
        ]

        
        fields.forEach((field) => {
            if (values[field.name] === '') {
                field.errorSetter(field.errorMessage);
                isValid = false;
            } else {
                field.errorSetter('');
            }
        })

        if(values.password !== values.confirmPassword){
            setErrorPasswordCon(values.confirmPassword === values.password ? '' :'รหัสผ่านไม่ตรงกัน')
            isValid = false;
        } if(!values.isChecked){
            setErrorCheck('error')
            isValid = false;
        }

        return isValid

      };
      
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const { email,firstName,lastName,telephone,password,isChecked } = values
        if(handlevalidation()){
            const { data } = await axios.post(registerRoute,{
                email ,
                firstName ,
                lastName ,
                telephone ,
                password ,
                isChecked 
            })

            if (data.status){
                localStorage.setItem('course-user',JSON.stringify(data.data))
                navigate('/otp')
            } else{
                if(data.msg === 'Email ของท่านถูกใช้งานแล้ว'){
                    setErrorEmail('Email ของท่านถูกใช้งานแล้ว')
                }
            }

        }

    }
   
    useEffect(()=>{
       if(localStorage.getItem('course-user')){
            navigate('/')
       }
    },[])
    
    return (
        <div className='container-register'>
            <div className='box-register'>
                <div className='text-register'>
                    <img
                        src='../src/assets/register-assets/futureskill_logo.jpg'
                        alt='future-skill'
                    />
                    <h2>Past<span className='span-register'>Skill</span></h2>
                </div>
                <form className='Box-input' onSubmit={(e)=>handleSubmit(e)}>
                    <h1 className='h1-register'>เข้าสู่บัญชี Pastskill ของคุณ</h1>
                    <div className='intro-text'>
                        <h6>สมัครสมาชิกกับเราวันนี้</h6>
                        <p>เพื่อรับส่วนลดสุดพิเศษต่างๆ มากมาย ตั้งแต่คอร์สแรก</p>
                    </div>
                    <div className='register-form'>
                        <input
                            type='text'
                            className={`register-input ${errorEmail === '' ? '' :'error'}`}
                            name='email'
                            placeholder='อีเมล'
                            onChange={(e)=> handleChange(e)}
                        />
                        <p className='error-msg'>{errorEmail}</p>
                        <div className='register-dual'>
                            <div className='dual'>
                                <input
                                    type='text'
                                    className={`register-input ${errorFirst === '' ? '' :'error'}`}
                                    name='firstName'
                                    placeholder='ชื่อ'
                                    onChange={(e)=> handleChange(e)}
                                />
                        <p className='error-msg'>{errorFirst}</p>
                            </div>
                            <div className='dual'>
                                <input
                                    type='text'
                                    className={`register-input ${errorLast === ''? '' :'error'}`}
                                    name='lastName'
                                    placeholder='นามสกุล'
                                    onChange={(e)=> handleChange(e)}
                                />
                                <p className='error-msg'>{errorLast}</p>
                            </div>
                        </div>
                        <input
                            type='text'
                            className={`register-input ${errorTel === ''? '' :'error'}`}
                            name='telephone'
                            placeholder='เบอร์โทรศัพท์'
                            onChange={(e)=> handleChange(e)} 
                        />
                        <p className='error-msg'>{errorTel}</p>
                        <input
                            type='password'
                            className={`register-input ${errorPassword === ''? '' :'error'}`}
                            name='password'
                            placeholder='รหัสผ่าน'
                            onChange={(e)=> handleChange(e)} 
                        />
                        <p className='error-msg'>{errorPassword}</p>
                        <input
                            type='password'
                            className={`register-input ${errorPasswordCon === ''? '' :'error'}`}
                            name='confirmPassword'
                            placeholder='ยืนยันรหัสผ่าน'
                            onChange={(e)=> handleChange(e)} 
                        />
                        <p className='error-msg'>{errorPasswordCon}</p>
                        <div className={`register-checkbox ${ ErrorCheck ? 'error' : ''}`}>
                            <input
                                type='checkbox'
                                name='isChecked'
                                onChange={(e)=> handleChange(e)} 
                            />
                            <p>การสมัครใช้งาน เราถือว่าคุณยอมรับข้อกําหนดการใช้งานของ Pastskill แล้ว</p>
                        </div>
                    </div>
                    <button 
                        type='submit' 
                        className='btn-register'
                    >สมัครสมาชิก</button>
                    <h5>มีบัญชีแล้ว ? <Link to='/login' className='Link Login'>เข้าสู่บัญชี</Link></h5>
                </form>
                <div className='div-back-to-first-page'>
                    <Link to='/' className='back-to-first-page'>
                        <FaArrowLeftLong /> <span>กลับหน้าแรก</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register 