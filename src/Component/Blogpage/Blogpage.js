import React from 'react';
import { Link } from 'react-router-dom';
import './Blogpage.css';

const Blogpage = () => {
  return (
    <div className='blogpage'>
        <div className="blogpage_container">
            <div className="blogpage_card">
                <img src="https://images.unsplash.com/photo-1585160113536-a14b15e40174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                <div className="overlay_blogpage">
                    <span>Des 19,</span><br/>
                    <span>2022</span>
                </div>
            </div>
            <div className="blogpage_card">
                 <span>Blog/Delhi</span>
                 <h3>Lorem ipsum dolor sit.</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi incidunt tempore porro. Quas aperiam architecto, ipsum natus asperiores eveniet et quidem ut, non obcaecati ipsam?</p>

                 <Link to="/">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Blogpage;