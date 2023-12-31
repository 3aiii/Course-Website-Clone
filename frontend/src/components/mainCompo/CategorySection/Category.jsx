import { useState,useEffect } from 'react'
import './Category.css'
import axios from 'axios';
import { getAllCatRoute, getSingleCatRoute } from '../../../utils/APIRoutes';
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import Card from '../../index/Card/Card';

const Category = () => {
  const [btnCat , setbtnCat] = useState([])
  const [sliceIndex , setSliceIndex] = useState(0)
  const [CatData,setCatData] = useState([])
  
  const getAllCat = async () =>{
    const { data } = await axios.get(getAllCatRoute)
    setbtnCat(data)
  }

  const handleCategory = async (index,id)=>{
    setSliceIndex(index)

    const { data } = await axios.get(`${getSingleCatRoute}/${id}`)
    setCatData(data.data)
  }

  useEffect(()=>{
    getAllCat()
    handleCategory(0,'0')
  },[])

  return (
    <div className='category-cotainer'>
      <div className='category-box'>
        <h1>มากกว่า 300+ คอร์สเรียนออนไลน์ใน 18 หมวดหมู่ 🔥</h1>
        <div className='container-all-btn'>
          <button
            className={`btn-get-cat ${sliceIndex === 0 ? `active` :``}`}
            onClick={()=>handleCategory(0,'0')}
          >
            ทั้งหมด
          </button>
          {
            btnCat.map((data,index)=>(
              <button
                className={`btn-get-cat ${sliceIndex === index + 1 ? `active` :``}`}
                key={index}
                onClick={()=>handleCategory(index+1 ,data._id)}
              >
                { data.name }
              </button>
            ))
          }
        </div>
        <div className='link-div'>
          <Link to={'/'} className='link-all-course'>ดูคอร์สเรียนทั้งหมด </Link>
          <BsArrowRight />
        </div>
        <div className='Main-card'>
          <div className='bar'>
            <p> 01 / 03 </p>
            <button className='cat back-btn'><IoIosArrowBack /></button>
            <button className='cat foward-btn'><IoIosArrowForward /></button>
          </div>
        </div>
        <div className='card-info'>
          {
            CatData.map((data,index)=>(
              <Card CatData = {data} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Category