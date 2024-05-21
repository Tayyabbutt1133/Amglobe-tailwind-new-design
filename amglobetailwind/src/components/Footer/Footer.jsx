import React from 'react';
import './Footer.css';
import fb from '../../assets/Images/Facebook.svg';
import insta from '../../assets/Images/Instagram.svg';
import linkedin from '../../assets/Images/linkedin.svg';
import youtube from '../../assets/Images/Youtube.svg';
import circle from '../../assets/Images/reserveCircle.svg';

const Footer = () => {
  return (
    <div className="footermain">
      <div className="footer-container grid grid-cols-1 sm:grid-cols-3 gap-5 text-center sm:text-start xs:text-sm text-[0.6em]">
        <div className="footerinner">
          <ul>
            <li><span className='footer-span'>Sitemap</span></li>
            <a href=""><li>Home</li></a>
            <a href=""><li>Candidates</li></a>
            <a href=""><li>Employers</li></a>
            <a href=""><li>About us</li></a>
            <a href=""><li>Insights</li></a>
          </ul>
        </div>
        <div className="footerinner">
          <ul>
            <a href=""><li>Facebook</li></a>
            <a href=""><li>Linkedin</li></a>
            <a href=""><li>Instagram</li></a>
            <a href=""><li>Twitter</li></a>
          </ul>
        </div>
        <div className="footerinner">
          <h1>Contact Details</h1>
          <h2>contact@infinity.com</h2>
          <p>Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565</p>
          <div className="social-links-footer flex mt-6 items-center sm:justify-start justify-center">
            <a href="#"><img src={linkedin} alt=""/></a>
            <a href="#"><img src={insta}    alt="" /></a>
            <a href="#"><img src={youtube}  alt="" /></a>
            <a href="#"><img src={fb}       alt="" /></a>
          </div>
        </div>
      </div>
      <div className='footer-reserve'>
        <p className='footer-reserve-text xs:text-sm text-[0.6em]'>© 2024 AM GLOBAL. All rights reserved.</p>
        <img src={circle} alt="" className='footer-reserve-circle md:block hidden' />
      </div>
    </div>
  )
}

export default Footer;
