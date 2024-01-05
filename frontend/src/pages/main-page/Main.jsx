import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/index/Navbar/Navbar'
import SlicePage from '../../components/mainCompo/SlicePage/SlicePage'
import user from '../../utils/User'
import SectionDetail from '../../components/mainCompo/SectionDetail/SectionDetail'
import Category from '../../components/mainCompo/CategorySection/Category'
import SectionPath from '../../components/mainCompo/SectionPath/SectionPath'
import Warranty from '../../components/mainCompo/Warranty/Warranty'
import FeedBack from '../../components/mainCompo/Feedback/FeedBack'
import Footer from '../../components/mainCompo/Footer/Footer'
import './Main.css'

const Main = () => {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.clear()
        navigate('/login')
    }

    useEffect(()=>{
        if(user){
            if(!user.isValidation){
                navigate('/otp')                
            }
        } 
     },[])

    return (
        <>
            <Navbar />
            <div className='main-body'>
                <SlicePage />
                <SectionDetail />
                <Category />   
                <SectionPath />  
                <Warranty />
                <FeedBack />
                <Footer />
            </div>
            {/* <button onClick={handleLogout}>Logout</button> */}
        </>
    )
}

export default Main