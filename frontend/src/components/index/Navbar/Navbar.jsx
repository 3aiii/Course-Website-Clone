import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { IoNotificationsOutline,IoCartOutline  } from "react-icons/io5";
import { useEffect, useState } from 'react';
import DropDown from './DropDown';
import ProfilePopUp from './ProfilePopUp';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('course-user'))
  const navigate = useNavigate()
  const [open,setOpen] = useState(false)
  const [openProfile,setOpenProfile] = useState(false)
  const [scrollSwitch ,setScrollSwitch] = useState(0)

  const handlScroll = () =>{
    setScrollSwitch(window.scrollY)
  }

  const handleLogOut = () =>{
    localStorage.removeItem('course-user')
    navigate('/')
  }

  useEffect(() => {
    window.addEventListener('scroll', handlScroll)
    return () => {
      window.removeEventListener('scroll', handlScroll)
    }
  }, [])

  return (
    <>
      <div className={`navbar-container ${!user ? `unLogin ${scrollSwitch > 50 && `scroll-active`}` : `` }`}>
        <div className='navbar-box'>
          <div className='navbar-text'>
            <Link to={'/'} className={`navbar-div-logo`}>
              <img
                src={!user ? `/src/assets/main-assets/fs-logo-${scrollSwitch > 50 ? `light.png` : `dark.webp`}` : `/src/assets/main-assets/fs-logo-light.png`}
                alt='navbar-logo'
              />
            </Link>
            <ul>
              <li>
                <p className={`navbar-p ${scrollSwitch > 50 && `scrollActive`}`} onClick={()=> setOpen(!open)}>คอร์สออนไลน์</p>
                {
                  open ? (
                    scrollSwitch > 50 ? <TiArrowSortedUp color='black'/> : <TiArrowSortedUp color=''/>
                  ) : (
                    scrollSwitch > 50 ? <TiArrowSortedDown color='black'/> : <TiArrowSortedDown color=''/>
                  )
                }
              </li>
              <li>
                <Link to='/' className={`navbar-link ${!user ? `${scrollSwitch > 50 ? `` : `unLogin`}` : ``}`}>สมาชิกรายปี</Link>
              </li>
              <li>
                <Link to='/' className={`navbar-link ${!user ? `${scrollSwitch > 50 ? `` : `unLogin`}` : ``}`}>สำหรับองค์กร</Link>
              </li>
            </ul>
          </div>
          <div className='navbar-actions'>
            <div className={`navbar-search ${!user ? `${scrollSwitch > 50 ? `` : `unLogin`}` : ``}`}>
              <IoMdSearch />
              <input
                type='text'
                placeholder='ค้นหา'
              />
            </div>
            {
              user ? (
                <div className='navbar-icon-actions'> 
                  <div className='navbar-book'>
                    <FiBook />
                  </div>
                  <div className='navbar-book'>
                    <IoNotificationsOutline />
                  </div>
                  <div className={`navbar-book`}>
                    <IoCartOutline />
                  </div>
                  <div className={`navbar-book`}>
                    <button className='btn-profile' onClick={()=> setOpenProfile(!openProfile)}>
                      {
                        user.firstName.charAt(0)
                      }
                    </button>

                    {/* OpenProfile */}
                    { 
                      <ProfilePopUp 
                        user={user} 
                        visible = {openProfile}  
                        handleLogOut = {handleLogOut}
                      />                      
                    }                   
                  </div>
                </div>
              ) : (
                <div className='navbar-unlogin'>
                  {
                    scrollSwitch > 50 ? <IoCartOutline color='black' /> : <IoCartOutline color=''/>
                  }
                  <Link to='/login' className={`Link-navbar login ${scrollSwitch > 50 ? `ScrollActive` : ``}`}>เข้าสู่ระบบ</Link>          
                  <Link to='/register' className='Link-navbar register'>สมัครสมาชิก</Link>          
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className={`dropdown-container ${open ? `active` : `hidden` }`} >
        {
          <DropDown />
        }
      </div>
    </>
  )
}

export default Navbar