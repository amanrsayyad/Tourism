import React from 'react';
import Top from '../Component/Top/Top';
import Tourism from '../Component/Tourism/Tourism';
import Footer from '../Component/Footer/Footer';
import Bestseller from '../Component/Bestseller/Bestseller';
import Newsletter from '../Component/Newsletter/Newsletter';
import MainSlider from '../Component/Review/MainSlider';

const Tour = () => {
  return (
    <div>
        <Tourism />
        <Top />
        <Bestseller />
        <MainSlider />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Tour;