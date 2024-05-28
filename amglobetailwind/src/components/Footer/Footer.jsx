import React from 'react';
import './Footer.css';
import fb from '../../assets/Images/Facebook.svg';
import insta from '../../assets/Images/Instagram.svg';
import linkedin from '../../assets/Images/linkedin.svg';
import youtube from '../../assets/Images/Youtube.svg';
import circle from '../../assets/Images/reserveCircle.svg';

// grid grid-cols-1 sm:grid-cols-3
const Footer = () => {
  return (
    // <div className="footermain">


      <div className="footer-container">

        

        <div className='footerInner-Div  flex lg:justify-end justify-center md:gap-20 lg:gap-32 sm:gap-24 gap-12 sm:flex-row flex-col  text-center sm:text-start p-28'>
        <div className="footerinner">
          <ul className=' md:text-[1em] text-[0.8em]'>
            <li><span className='footer-span text-white text-[1.2em]'>Sitemap</span></li>
            <a href=""><li>Home</li></a>
            <a href=""><li>Candidates</li></a>
            <a href=""><li>Employers</li></a>
            <a href=""><li>About us</li></a>
            <a href=""><li>Insights</li></a>
          </ul>
        </div>
        <div className="footerinner">
          <ul className=' md:text-[1em] text-[0.8em]'>
            <a href=""><li>Facebook</li></a>
            <a href=""><li>Linkedin</li></a>
            <a href=""><li>Instagram</li></a>
            <a href=""><li>Twitter</li></a>
          </ul>
        </div>
        <div className="footerinner xs:w-auto md:text-[1em] text-[0.8em]">
          <h1 className='text-[1.2em] text-white'>Contact Details</h1>
          <h2>contact@infinity.com</h2>
          <p className='sm:w-80'>Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565</p>
          <div className="social-links-footer flex mt-6 items-center sm:justify-start justify-center gap-4">
            <a href="#"><img src={linkedin} className=' lg:w-10 xs:w-8 w-96' alt=""/></a>
            <a href="#"><img src={insta}    className=' lg:w-10 xs:w-8 w-96' alt="" /></a>
            <a href="#"><img src={youtube}  className=' lg:w-10 xs:w-8 w-96' alt="" /></a>
            <a href="#"><img src={fb}       className=' lg:w-10 xs:w-8 w-96' alt="" /></a>
          </div>
          </div>
          </div>
         <div className='footer-reserve mx-32'>
        <p className='footer-reserve-text xs:text-sm text-[0.6em]'>© 2024 AM GLOBAL. All rights reserved.</p>
        <img src={circle} alt="" className='footer-reserve-circle md:block hidden' />
        </div> 
         


      </div>


      // </div>
   
  )
}

export default Footer;
