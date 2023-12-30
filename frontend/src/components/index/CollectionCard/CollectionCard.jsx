import './CollectionCard.css'
import { MdFormatListBulletedAdd } from "react-icons/md";
import { LuClock } from "react-icons/lu";

const CollectionCard = () => {
  return (
    <div className='collection-container'>
        <div className='collection-box'>
            <div className='background-bar first'></div>
            <div className='background-bar sec'></div>
            <div className='box-img'>
                <img
                    src='https://i.ytimg.com/vi/40zNM3en82E/maxresdefault.jpg'
                    alt='img-collection'
                    className='img-collection'
                />
                <div className='text-img'>
                    <h6>3 คอร์ส</h6>
                    <MdFormatListBulletedAdd />
                    <div className='time'>
                        <LuClock />
                        <p>3.45 ชม. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard