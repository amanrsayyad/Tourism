import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <h1>Alaska</h1>
        <p>The New <span>Exciting</span> Adventure</p>
        <Link to="/">Leave A Request</Link>
    </div>
  )
}

export default Hero