import './SectionDetail.css'
import { BiCommentDetail } from "react-icons/bi";
import { LuBookOpen } from "react-icons/lu";

const SectionDetail = () => {
  return (
    <div className='sectionDetail-container'>
        <div className='sectionDetail-box'>
            <div className='section-desc'>
                <h1>แพลตฟอร์มคอร์สเรียนออนไลน์<br/>สำหรับพัฒนาทักษะแห่งอนาคต</h1>
                <p>
                    คอร์สออนไลน์ของ PastSkill ครอบคลุมทั้งสาย Business, Technology,<br/>
                    Data และ Creative สอนโดยผู้เชี่ยวชาญที่คัดกรองโปรไฟล์มาแล้ว
                </p>
            </div>
            <div className='section-detail'>
                <div className='section-benefit comment'>
                    <BiCommentDetail /> 
                    <div>
                        <p>เรียนจบส่ง Class Project ทำ<br/>แบบทดสอบและรับ<br/>ประกาศนียบัตร</p>
                    </div>                
                </div>
                <div className='section-benefit book'>                   
                    <LuBookOpen />
                    <div>
                        <p>คอร์สเรียนแห่งทักษะสำหรับ<br/>อนาคตที่ไม่เหมือนใคร</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionDetail