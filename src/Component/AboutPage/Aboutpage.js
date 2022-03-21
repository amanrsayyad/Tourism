import React from 'react';
import './Aboutpage.css';
import Footer from '../Footer/Footer';

const Aboutpage = () => {
  return (
    <div>
        <div className="new"></div>
    <div className='about_page'>
        <div className="aboutPage_container">
            <div className="aboutPage">
                <img src="https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
            <div className="aboutPage">
                <h3>lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate cumque temporibus veniam quia non!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate cumque temporibus veniam quia non!</p>
                <button className="page_button">More Info</button>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Aboutpage