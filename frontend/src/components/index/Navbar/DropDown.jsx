import { useEffect, useState } from 'react'
import './Navbar.css'
import axios from 'axios'
import { getAllCatRoute } from '../../../utils/APIRoutes'
import { Link } from 'react-router-dom'

const DropDown = () => {
  const [data,setData] = useState([])
  const [clickData,setClickData] = useState([])
  
  const FetchData = async () =>{
    const { data } = await axios.get(getAllCatRoute)
    setData(data)
  }

  const handleClickData = (data) =>{
    setClickData(data)
  }


  // console.log(data);
  useEffect(()=>{
    FetchData()
  },[])

  return (
    <div className='dropdown-box'>
      <div className='dropdown-content'>
        <h2>Upskill</h2>
        <div className='dropdown-data'> 
          <h4>คอร์สเรียน</h4>
        </div>
        <div className='dropdown-data'> 
          <h4>คอร์สเรียนใหม่</h4>
        </div>
        <div className='dropdown-data'> 
          <h4>เส้นทางการเรียน</h4>
        </div>
      </div>
      <div className='dropdown-content'>
        {
          data.map((data,index)=>(
            <div className='dropdown-data' key={index}>
              <h4 onClick={()=> handleClickData(data.name)}>{ data.name }</h4>
            </div>
          ))
        }
      </div>
      <div className='dropdown-content'>
        <h2>Online Courses</h2>
        {          
          data.map((data,index)=>(          
            data.name === clickData && data.childrens.map((dataCh)=>(
              <div className='dropdown-data online-course' key={index}>
                <h4>{dataCh.title}</h4>
              </div>
            ))              
          ))
        }
      </div>
      <div className='dropdown-content'>
        <Link to={'/'} className='link-dropdown'>ดูคอร์สเรียนออนไลน์</Link>
        <div className='dropdown-example'>
          <img
            src='https://s3-eu-west-1.amazonaws.com/landingi-editor-uploads/ykJHY95p/Untitled_1.jpg'
            alt='img-example'
            className='img-example'
          />
          <h5>เพิ่มประสิทธิภาพการทำงาน ด้วย Agile process</h5>
          <Link to={'/'} className='link-detail'>ดูรายละเอียด</Link>
        </div>
      </div>
    </div>
  )
}

export default DropDown