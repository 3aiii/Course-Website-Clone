import './Footer.css'
import data_footer from './data';
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
    // console.log(data_footer);
  return (
    <div className='footer-container'>
        <div className='footer-box'>
            <div className='footer-first-div'>
                <div className='footer-logo-and-text'>
                    <img
                        src='\src\assets\main-assets\fs-logo-light.png'
                        alt='footer-logo'
                        className='footer-logo'
                    />
                    <p>แพลตฟอร์มการเรียนออนไลน์สำหรับทักษะแห่งอนาคต</p>
                </div>
                <div className='footer-menu'>
                    {
                        data_footer.map((data,index)=>(
                            <div className='footer-menu-name' key={index}>
                                { data.name }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='footer-sec-div'>
                <div className='footer-sec-text-and-logo'>Copyright © 2023 Sirapat Wongphatsawek </div>
                <div className='footer-sec-text-and-logo'>
                    <SlSocialFacebook />
                    <FaInstagram />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer