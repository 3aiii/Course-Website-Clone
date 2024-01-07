import './Card.css'
import { CiUser } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { IoCartOutline  } from "react-icons/io5";

const Card = ({ CatData }) => {
    return (
        <div className='card-container' >
            <img
                src={CatData.courseImg}
                alt='img-card'
                className='img-card'
            />
            <div className='card-text'>
                <h5>{CatData.courseName}</h5>
                <div className='img-and-name'>
                    <img
                        src='https://staticg.sportskeeda.com/editor/2023/11/9e4f2-16991024448309-1920.jpg?w=840'
                        alt='img-and-name'
                    />
                    <p>{CatData.userCreate.firstName} {CatData.userCreate.lastName}</p>
                </div>
                <div className='detail-of-course'>
                    <p className='card-text-course'><CiUser /> 8</p> {/* Not create in database*/}
                    <p className='card-text-course'><LuClock /> 12</p> {/* Not create in database*/}
                    <p className='card-text-course'><VscGraph /> {CatData.difficulty}</p> 
                </div>
                <div className='card-price'>
                    <h1 className='h1-price'>{`${CatData.coursePrice.toLocaleString()}.00`} <span>990.00</span></h1>
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