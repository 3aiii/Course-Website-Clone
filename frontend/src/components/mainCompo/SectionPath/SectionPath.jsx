import './SectionPath.css'
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import CollectionCard from '../../index/CollectionCard/CollectionCard';
import axios from 'axios';
import { getCollectionRoute } from '../../../utils/APIRoutes';
import { useEffect, useState } from 'react';

const SectionPath = () => {
    const [collectionData , setCollectionData] = useState()
    const [page,setPage] = useState(1)
    const [pageCount,setPageCount] = useState(0)

    const fetchCollection = async () =>{
        const { data } = await axios.get(`${getCollectionRoute}?page=${page}`)   
        setCollectionData(data)
    }

    const handlePrevious = () => {
        setPage((p) => (p === 1 ? p : p - 1));
    };
    
    const handleNext = () => {
        setPage((p) => (p === pageCount ? p : p + 1));
    };
    
    useEffect(()=>{
        if(collectionData){
            setPageCount(Math.ceil(collectionData?.pagination.pageCount))
        }
        fetchCollection()
        
    },[page])
            
    return (
        <div className='sectionPath-container'>
            <div className='sectionPath-box'>
                <p className='sectionPath-topic'>เส้นทางการเรียนรู้ 👍</p>
                <p>รูปแบบคอร์สเรียนออนไลน์ที่ออกแบบมาให้คุณ</p>
                <div className='all-course'>
                    <div>
                        <p>ดูคอร์สเส้นทางการเรียนรู้ทั้งหมด</p>
                    </div>
                    <BsArrowRight /> 
                </div>
                <div className='Main-card collection'>
                    <div className='bar collection'>
                        <p> {page} / { Math.ceil(collectionData?.pagination.pageCount) } </p>
                        <button disabled = {page === 1} className='cat back-btn' onClick={handlePrevious}><IoIosArrowBack /></button>
                        <button disabled = {page === pageCount} className='cat foward-btn' onClick={handleNext}><IoIosArrowForward /></button>
                    </div>
                </div>
                <div className='slide-collection'>
                    { collectionData &&
                            collectionData.data.map((data,index)=>(
                                <CollectionCard 
                                    data = {data}
                                    key={index}
                                /> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionPath