import './SectionPath.css'
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import CollectionCard from '../../index/CollectionCard/CollectionCard';

const SectionPath = () => {
  return (
    <div className='sectionPath-container'>
        <div className='sectionPath-box'>
            <p className='sectionPath-topic'>เส้นทางการเรียนรู้ 👍</p>
            <p>รูปแบบคอร์สเรียนออนไลน์ที่ออกแบบมาให้คุณ</p>
            <div className='all-course'>
                <div>
                    <p>ดูคอร์สเส้นทางการเรียนรู้ทั้งหมด</p>
                </div>
                <BsArrowRight /> 
            </div>
            <div className='Main-card collection'>
                <div className='bar collection'>
                    <p> 01 / 10 </p>
                    <button className='cat back-btn'><IoIosArrowBack /></button>
                    <button className='cat foward-btn'><IoIosArrowForward /></button>
                </div>
            </div>
            <div className='slide-collection'>
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
        </div>
    </div>
  )
}

export default SectionPath