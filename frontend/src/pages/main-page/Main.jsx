import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/index/Navbar/Navbar'
import SlicePage from '../../components/mainCompo/SlicePage/SlicePage'
import user from '../../utils/User'
import SectionDetail from '../../components/mainCompo/SectionDetail/SectionDetail'
import Category from '../../components/mainCompo/CategorySection/Category'

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
            <div>
                <SlicePage />
                <SectionDetail />
                <Category />
            </div>
            {/* <button onClick={handleLogout}>Logout</button> */}
        </>
    )
}

export default Main