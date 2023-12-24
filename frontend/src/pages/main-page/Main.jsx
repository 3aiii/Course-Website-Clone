import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const navigate = useNavigate()


    const handleLogout = ()=>{
        localStorage.clear()
        navigate('/login')
    }

    useEffect(()=>{
        if(!localStorage.getItem('course-user')){
            navigate('/login')
        }
     },[])

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Main