import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
       <div className="footer_container">
           <div className="footer_card">
                 <h3>Tourism</h3>
            </div>   
           <div className="footer_card">
                 <h5>Information</h5>
                 <ul>
                     <li>About Us</li>
                     <li>Blog</li>
                     <li>Event</li>
                 </ul>
            </div>   
           <div className="footer_card">
                 <h5>Helpful Links</h5>
                 <ul>
                     <li>Tours</li>
                     <li>Blog</li>
                     <li>Policies</li>
                 </ul>
            </div>   
           <div className="footer_card">
                 <h5>Helpful Links</h5>
                 <ul>
                     <li>tourism@gmail.com</li>
                     <li>+91 8956427785</li>
                 </ul>
            </div>   
           <div className="footer_card">
                 <ul>
                     <li  className='socail_footer'><i class="fa-brands fa-instagram"></i></li>
                     <li  className='socail_footer'><i class="fa-brands fa-facebook-square"></i></li>
                     <li  className='socail_footer'><i class="fa-brands fa-whatsapp"></i></li>
                 </ul>
            </div>   
        </div>
    </div>
  )
}

export default Footer;