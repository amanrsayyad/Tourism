import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = () => {
  return (
    <div className='book'>
       <div className="book_container">
          <div className="book_card">
             <h3>Discover Amazing places in India Sri-Lanka</h3> 
          </div> 
          <div className="book_card">
              <div className="book_img">
                   <div className="input">
                      <div className="input_icon">
                       <i class="fa-solid fa-map-location-dot"></i><h3>Select Tour</h3>
                      </div>
                      <div className="input_icon">
                      <i class="fa-solid fa-caret-down"></i>
                      </div>
                   </div>
                   <div className="input">
                      <div className="input_icon">
                      <i class="fa-solid fa-calendar"></i>
                      <h3>Select Date</h3>
                      </div>
                      <div className="input_icon">
                      <i class="fa-solid fa-caret-down"></i>
                      </div>
                   </div>
                   <div className="input">
                      <div className="input_icon">
                      <i class="fa-solid fa-user"></i><h3>Number OF Guests</h3>
                      </div>
                      <div className="input_icon">
                      <i class="fa-solid fa-caret-down"></i>
                      </div>
                   </div>
                   <div className="btn_book">
                     <Link to="/">Book Now</Link> 
                   </div>
              </div>
          </div> 
        </div>
    </div>
  )
}

export default Book;