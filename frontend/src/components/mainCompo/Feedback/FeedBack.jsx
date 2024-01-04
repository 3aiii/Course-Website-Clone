import './FeedBack.css'
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL,RiDoubleQuotesR  } from "react-icons/ri";

const FeedBack = () => {
    const user = JSON.parse(localStorage.getItem('course-user'))

    return (
        <div className='Feedback-container'> 
            <div className='Feedback-box'>
                <div className='Feedback-div'>
                    <img
                        src='https://futureskill.co/_next/static/media/bg-testimonial.5c03e0f5.png'            
                        alt='img-feedback-bg'
                        className={`img-bg-feedback first ${user ? `onUser` : ``}`}
                    />
                </div>
                <div className='Feedback-div'>
                    <img
                        src='https://futureskill.co/_next/static/media/bg-el1.bb1fcb51.png'
                        alt='img-feedback-bg'
                        className='img-bg-feedback sec'
                    />
                </div>
                <div className='Main-feedback'>
                    <div className='text-feedback'>
                        <h5><span>เสียงตอบรับ</span>จากผู้เรียนคอร์สเรียนออนไลน์ของ PastSkill 👏</h5>
                        <div className='content-feedback'>
                            <h4>5.0</h4>
                            <div className='img-star'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='all-feedback'>
                                <div className='feedback-section-detail'>
                                    <p>
                                        <RiDoubleQuotesL />
                                        เราสามารถนําความรู้ที่ได้มาร่วมกับการทํางานของเรา เเต่ตอนนี้ยังไม่ได้นําไปใช้จริง ๆ จัง ๆ ขนาดนั้นครับผม 
                                        เเต่ถ้ามีงานอะไรที่เกี่ยวกับพวกนี้ ผมว่ายังไงก็ต้องได้ใช้อย่างเเน่นอนครับผม ผมชอบการเรียนออนไลน์เเบบนี้ครับ 
                                        เพราะเราสามารถดูย้อนหลังได้ เเล้วก็สามารถข้ามไปข้ามมาได้ด้วยครับ อาจารย์ก็สอนดีด้วย เเนะนําเเหล่งข้อมูลที่จะไปหาเพิ่มเติมได้ 
                                        เปรียบเทียบเหมือนกับว่า ไม่ได้สอนเเค่เอาปลามาให้อย่างเดียว ยังสอนวิธีตกปลาด้วยครับ ที่ชอบจริง ๆ ก็ที่เอาลิงค์ ชุมชน สายอาชีพต่าง ๆ เอามาเผยเเพร่
                                        <RiDoubleQuotesR />
                                    </p>
                                </div>
                                <div className='list-feedback-profile'>
                                    <img
                                        src='https://mpics.mgronline.com/pics/Images/566000011856701.JPEG'
                                        alt='img-feedback'
                                        className='img-feedback'
                                    />                            
                                    <h6>อิตาโดริ ยูจิ</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-viewer'>
                        <div className='viewer-container'>
                            <h2>200+</h2>
                            <p>ผู้สอน</p>
                        </div>
                        <div className='viewer-container'>
                            <h2>300+</h2>
                            <p>คอร์สเรียน</p>
                        </div>
                        <div className='viewer-container'>
                            <h2>150,000+</h2>
                            <p>ผู้เรียน</p>
                        </div>
                        <div className='viewer-container'>
                            <h2>120+</h2>
                            <p>องค์กร</p>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default FeedBack