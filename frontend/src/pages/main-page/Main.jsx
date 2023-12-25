import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

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
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Main