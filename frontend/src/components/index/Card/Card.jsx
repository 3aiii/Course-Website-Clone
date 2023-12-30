import './Card.css'
import { CiUser } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { IoCartOutline  } from "react-icons/io5";

const Card = () => {
  return (
    <div className='card-container'>
        <img
            src='https://assets-global.website-files.com/596f0f6d59f5b2601af9f2ae/616d42dae7cc2961525e1ef2_Blog%2080%20FutureSkill.jpg'
            alt='img-card'
            className='img-card'
        />
        <div className='card-text'>
            <h5>ทบทวนตัวเองส่งท้ายปีและสำรวจสิ่งสำคัญในชีวิตด้วยเครื่องมือ Wheel of life</h5>
            <div className='img-and-name'>
                <img
                    src='https://staticg.sportskeeda.com/editor/2023/11/9e4f2-16991024448309-1920.jpg?w=840'
                    alt='img-and-name'
                />
                <p>นภัสสร ลีระสันทัดกุล</p>
            </div>
            <div className='detail-of-course'>
                <p className='card-text-course'><CiUser /> 8</p>
                <p className='card-text-course'><LuClock /> นาที</p>
                <p className='card-text-course'><VscGraph /> พื้นฐาน</p>
            </div>
            <div className='card-price'>
                <h1 className='h1-price'>$390.00 <span>990.00</span></h1>
            </div>
            <div className='card-action'>
                <button className='card-cart'><IoCartOutline/></button>
                <button className='card-btn-paymanet'>ซื้อคอร์สนี้</button>
            </div>
        </div>
    </div>
  )
}

export default Card