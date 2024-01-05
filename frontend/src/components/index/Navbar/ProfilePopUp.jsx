import React from 'react'
import { Link } from 'react-router-dom'
import { IoExitOutline } from "react-icons/io5";


const ProfilePopUp = ({ user,visible,handleLogOut }) => {
  return (
    <div className={`profilePopUp-container ${visible ? `visible` : `nonvisible` }`}>
        <div className='profilePopUp-box'>
            <div className='logo-and-name-profile'>
                <button className='btn-profile'>{ user.firstName.charAt(0) }</button>
                <p>{ user.firstName } { user.lastName }</p>
            </div>
            <div className='div-line'>
                <div className='line-profile'></div>
            </div>
            <div className='Link-div'>
                <Link className='link-profile'>หน้าแรก</Link>
                <Link className='link-profile'>เปิดการใช้งานคอร์สเรียน</Link>
                <Link className='link-profile'>คอร์สเรียนของฉัน</Link>
                <Link className='link-profile'>ดูคอร์สเรียนทั้งหมด</Link>
            </div>
            <div className='div-line'>
                <div className='line-profile'></div>
            </div>
            <div className='setting'>
                <Link className='link-profile'>ตั้งค่าบัญชี</Link>
            </div>
            <div className='div-line'>
                <div className='line-profile'></div>
            </div>
            <div className='div-exit'>
                <IoExitOutline />
                <div className='link-profile-exit' onClick={handleLogOut}>
                    ออกจากระบบ
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePopUp