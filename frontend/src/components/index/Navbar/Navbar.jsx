import { Link } from 'react-router-dom';
import './Navbar.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { IoNotificationsOutline,IoCartOutline  } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-box'>
        <div className='navbar-text'>
          <div className='navbar-div-logo'>
            <img
              src='/src/assets/login-assets/futureskill_logo.jpg'
              alt='navbar-logo'
            />
            <h2>Past<span className='span-register'>Skill</span></h2>
          </div>
          <ul>
            <li>
              <p>คอร์สออนไลน์ <TiArrowSortedDown /></p>
            </li>
            <li>
              <Link to='/' className='navbar-link'>สมาชิกรายปี</Link>
            </li>
            <li>
              <Link to='/' className='navbar-link'>สำหรับองค์กร</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-actions'>
          <div className='navbar-search'>
            <IoMdSearch />
            <input
              type='text'
              className='nabar-input'
              placeholder='ค้นหา'
            />
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default Navbar