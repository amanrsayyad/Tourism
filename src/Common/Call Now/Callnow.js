import React from 'react';
import './Callnow.css';

const Callnow = () => {
    return (
        <div className='call_now'>
            <div className='call_head'>
                <span>Call Now</span>
            </div>
            <div>
                <a href="tel:+919404929492">
                    <span><i class="fa-solid fa-phone"></i></span>
                </a>
                <a href="https://wa.me/919404929492" target="_blank" rel="norefrer">
                    <span><i class="fa-solid fa-message"></i></span>
                </a>
            </div>
        </div>
    )
}

export default Callnow