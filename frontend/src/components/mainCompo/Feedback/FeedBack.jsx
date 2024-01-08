import './FeedBack.css'
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL,RiDoubleQuotesR  } from "react-icons/ri";
import axios from 'axios';
import { getFeedback } from '../../../utils/APIRoutes';
import { useEffect, useState } from 'react';

const FeedBack = () => {
    const [feedbackData , setFeedbackData] = useState([])
    const [SingleFeedback , setSingleFeedBack] = useState([])
    const [pointer , setPointer] = useState('')
    const user = JSON.parse(localStorage.getItem('course-user'))

    const fetchFeedBack = async () =>{
        const { data } = await axios.get(`${getFeedback}?id=${pointer}`)
        if(data.status === 'None ID'){
            setFeedbackData(data)
        } else{
            setSingleFeedBack(data)
        }
    }

    const handleFeedBack = (id) =>{
        setPointer(id)
    }

    useEffect(()=>{
        fetchFeedBack()
    },[pointer])

    return (
        <div className='Feedback-container'> 
            <div className='Feedback-box'>
                <div className='Feedback-div'>
                    <img
                        src='https://futureskill.co/_next/static/media/bg-testimonial.5c03e0f5.png'            
                        alt='img-feedback-bg'
                        className={`img-bg-feedback first ${ user ? `onUser` : `` }`}
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
                                    {
                                        SingleFeedback.length !== 0 ? (
                                            <p>
                                                <RiDoubleQuotesL />
                                                    { SingleFeedback.data?.feedBackDes }
                                                <RiDoubleQuotesR />
                                            </p>                                            
                                        ) : (
                                            <p>
                                                <RiDoubleQuotesL />
                                                    { feedbackData.data && feedbackData.data[2].feedBackDes }
                                                <RiDoubleQuotesR />
                                            </p>                                            
                                        )
                                    }
                                </div>
                                <div className='img-btn'>
                                    {   feedbackData.data &&
                                        feedbackData.data.map((data,index)=> (
                                            <div className='list-feedback-profile' key={index}>
                                                <div className='feedback-name' >
                                                    <img
                                                        src='https://mpics.mgronline.com/pics/Images/566000011856701.JPEG'
                                                        alt='img-feedback'
                                                        className={`img-feedback ${ data._id === SingleFeedback.data?._id ? `select` : `` }`}
                                                        onClick={()=>{handleFeedBack(data._id)}}
                                                    />                            
                                                    <h6 className={`btn-feedbackName`}>{ data._id === SingleFeedback.data?._id && data.user.firstName}</h6>                                                
                                                </div>
                                            </div>
                                        ))
                                    }
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