import { Link } from 'react-router-dom';
import './Navbar.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { IoNotificationsOutline,IoCartOutline  } from "react-icons/io5";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('course-user'))
  
  const [scrollSwitch ,setScrollSwitch] = useState(0)
  const handlScroll = () =>{
    setScrollSwitch(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handlScroll)
    return () => {
      window.removeEventListener('scroll', handlScroll)
    }
  }, [])

  return (
    <div className={`navbar-container ${!user ? `unLogin ${scrollSwitch > 100 && `scroll-active`}` : `` }`}>
      <div className='navbar-box'>
        <div className='navbar-text'>
          <div className={`navbar-div-logo`}>
            <img
              src={!user ? `/src/assets/main-assets/fs-logo-${scrollSwitch > 100 ? `light.png` : `dark.webp`}` : `/src/assets/main-assets/fs-logo-light.png`}
              alt='navbar-logo'
            />
          </div>
          <ul>
            <li>
              <p className={`navbar-p ${scrollSwitch > 100 && `scrollActive`}`}>คอร์สออนไลน์</p>
              {
                scrollSwitch > 100 ? <TiArrowSortedDown color='black'/> : <TiArrowSortedDown color=''/>
              }
            </li>
            <li>
              <Link to='/' className={`navbar-link ${!user ? `${scrollSwitch > 100 ? `` : `unLogin`}` : ``}`}>สมาชิกรายปี</Link>
            </li>
            <li>
              <Link to='/' className={`navbar-link ${!user ? `${scrollSwitch > 100 ? `` : `unLogin`}` : ``}`}>สำหรับองค์กร</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-actions'>
          <div className={`navbar-search ${!user ? `${scrollSwitch > 100 ? `` : `unLogin`}` : ``}`}>
            <IoMdSearch />
            <input
              type='text'
              placeholder='ค้นหา'
            />
          </div>
          {
            user ? (
              <>
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
                  <div className='navbar-book'>
                    <button className='btn-profile'>S</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='navbar-unlogin'>
                  {
                    scrollSwitch > 100 ? <IoCartOutline color='black' /> : <IoCartOutline color=''/>
                  }
                  <Link to='/login' className={`Link-navbar login ${scrollSwitch > 100 ? `ScrollActive` : ``}`}>เข้าสู่ระบบ</Link>          
                  <Link to='/register' className='Link-navbar register'>สมัครสมาชิก</Link>          
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar