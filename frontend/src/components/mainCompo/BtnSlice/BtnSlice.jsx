import './BtnSlice.css'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const BtnSlice = ({ moveSlice,direction }) => {
  return (
    <div className=''>
        <button 
          className='btn-slice'
          onClick={moveSlice}
        >
          { direction === 'next' ?  <IoIosArrowForward/> : <IoIosArrowBack/> }
        </button>
    </div>
  )
}

export default BtnSlice