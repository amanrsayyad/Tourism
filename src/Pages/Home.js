import React from 'react';
import Places from '../Component/Places/Places';
import Caro from '../Component/Caro/Caro';
import Book from '../Component/Book/Book';
import About from '../Component/About/About';
import Blog from '../Component/Blog/Blog';
import Footer from '../Component/Footer/Footer';
import Hero from '../Component/Hero/Hero';
import Find from '../Component/Find/Find';

const Home = () => {
  return (
    <div>
      {/* <Caro /> */}
      <Hero />
      <About />
      <Places />
      <Blog />
      <Find />
      <Book />
      <Footer />
    </div>
  )
}

export default Home;