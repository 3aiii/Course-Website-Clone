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
  const [CatData,setCatData] = useState()
  const [currentCategoryId,setCurrentCategoryId] = useState('')
  const [page,setPage] = useState(1)
  const [pageCount,setPageCount] = useState(0)

  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${getSingleCatRoute}/${currentCategoryId}?page=${page}`);
      setCatData(data);
    };
    fetchData();

  }, [page, currentCategoryId]); 

  const handlePrevious = () => {
    setPage((p) => (p === 1 ? p : p - 1));
  };

  const handleNext = () => {
    setPage((p) => (p === pageCount ? p : p + 1));
  };

  const handleCategory = async (index, id) => {
    setSliceIndex(index);
    setPage(1); 
    setCurrentCategoryId(id);
  };

  const getAllCat = async () =>{
    const { data } = await axios.get(getAllCatRoute)
    setbtnCat(data)
  }

  useEffect(()=>{
    if (CatData){
      setPageCount(Math.ceil(CatData.pagination.pageCount))
    } else {
      handleCategory(0,'5fd63a065b89624c84cb21f2')
    }
    getAllCat()
  },[CatData])

  return (
    <div className='category-cotainer'>
      <div className='category-box'>
        <h1>มากกว่า 300+ คอร์สเรียนออนไลน์ใน 18 หมวดหมู่ 🔥</h1>
        <div className='container-all-btn'>
          <button
            className={`btn-get-cat ${sliceIndex === 0 ? `active` :``}`}
            onClick={()=>handleCategory(0,'5fd63a065b89624c84cb21f2')}
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
            <p> {pageCount === 0 ? '0' : page} / {pageCount} </p>
            <button disabled = {page === 1} className='cat back-btn' onClick={pageCount === 0 ? '' : handlePrevious}><IoIosArrowBack /></button>
            <button disabled = {page === pageCount} className='cat foward-btn' onClick={pageCount === 0 ? '' : handleNext}><IoIosArrowForward /></button>
          </div>
        </div>
        <div className='card-info'>
          {
            CatData &&
              CatData.items.map((data,index)=>(                
                <Card 
                  CatData = {data} 
                  key={index}                     
                />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Category 