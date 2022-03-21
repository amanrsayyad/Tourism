import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter_container">
            <div className="newsletter_card">
                <div className='newsletter_div'>
                  <h4>Give Us Feedback</h4>
                  <div className="news_border"></div>
                <button><a href="">Write a review</a></button>
                </div>
            </div>
            <div className="newsletter_card">
                <img src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Newsletter;