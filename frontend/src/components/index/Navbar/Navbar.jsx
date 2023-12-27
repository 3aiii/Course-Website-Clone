import { Link } from 'react-router-dom';
import './Navbar.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { IoNotificationsOutline,IoCartOutline  } from "react-icons/io5";
import { useEffect } from 'react';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('course-user'))

  return (
    <div className={`navbar-container ${!user ? `unLogin` : `` }`}>
      <div className='navbar-box'>
        <div className='navbar-text'>
          <div className={`navbar-div-logo`}>
            <img
              src={!user ? '/src/assets/main-assets/fs-logo-dark.webp' : '/src/assets/main-assets/fs-logo-light.png'}
              alt='navbar-logo'
            />
          </div>
          <ul>
            <li>
              <p>คอร์สออนไลน์ <TiArrowSortedDown /></p>
            </li>
            <li>
              <Link to='/' className={`navbar-link ${!user ? `unLogin` : ``}`}>สมาชิกรายปี</Link>
            </li>
            <li>
              <Link to='/' className={`navbar-link ${!user ? `unLogin` : ``}`}>สำหรับองค์กร</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-actions'>
          <div className={`navbar-search ${!user ? `unLogin` : ``}`}>
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
                  <div className='navbar-book'>
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
                  <IoCartOutline />
                  <Link to='/login' className='Link-navbar login'>เข้าสู่ระบบ</Link>          
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