import './SlicePage.css'
import SliceData from './SliceData.js'
import BtnSlice from '../BtnSlice/BtnSlice.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const SlicePage = () => {
  const [sliceIndex , setSliceIndex] = useState(1)

  const nextSlice = () =>{
    if (sliceIndex !== SliceData.length){
      setSliceIndex(sliceIndex + 1)
    } else if(sliceIndex === SliceData.length){
      setSliceIndex(1)
    }
  }
  
  const prevSlice = () =>{
    if(sliceIndex !== 1){
      setSliceIndex(sliceIndex - 1)
    } else if (sliceIndex === 1){
      setSliceIndex(SliceData.length)
    }
  }

  const moveDot = (index) =>{
    setSliceIndex(index)
  }

  return (
    <div className='slicePage-container'>
      {        
        SliceData.map((data,index)=> (
          <div className={sliceIndex === index + 1  ? 'box-img-slicePage active' : 'slice'} key={data.id} >
            <img
              src={`${data.src}`}
            />
            <div className='box-btn'>
              <Link className={`btn-course ${sliceIndex === 2 && ` btn-course img2`}`} to={'/'}>ดูคอร์สเรียนทั้งหมด</Link>
            </div>
            <div className='style-btn'>
              <BtnSlice
                moveSlice = {prevSlice}
                direction = {'prev'}
              />
              <div className='container-dot'>
                {
                  Array.from({length : 3}).map((dot,index_array)=>(
                    <div 
                      className={sliceIndex === index_array + 1  ? `dot active` : `dot`}
                      onClick={()=> moveDot(index_array + 1)}
                      key={index_array}
                    >                      
                    </div>
                  ))
                }
              </div>
              <BtnSlice 
                moveSlice = {nextSlice}
                direction = {'next'}
              />
            </div>
          </div>
        ))
      } 
    </div>
  )
}

export default SlicePage