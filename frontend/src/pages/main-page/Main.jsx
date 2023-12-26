import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/index/Navbar/Navbar'
import SlicePage from '../../components/mainCompo/SlicePage/SlicePage'

const Main = () => {
    const navigate = useNavigate()
    const user = localStorage.getItem('course-user')    
    const user_new = JSON.parse(user)

    const handleLogout = ()=>{
        localStorage.clear()
        navigate('/login')
    }
    
    useEffect(()=>{
        if(localStorage.getItem('course-user')){
            if(!user_new.isValidation){
                navigate('/otp')                
            }
        } else{
            navigate('/')            
        }
     },[])

    return (
        <>
            <div className='NavBar'>
                <Navbar />
            </div>
            <div>
                <SlicePage />                
            </div>
            {/* <button onClick={handleLogout}>Logout</button> */}
        </>
    )
}

export default Main