import React from 'react';
import Places from '../Component/Places/Places';
import Book from '../Component/Book/Book';
import Blog from '../Component/Blog/Blog';
import Footer from '../Component/Footer/Footer';
import Hero from '../Component/Hero/Hero';
import Find from '../Component/Find/Find';

const Home = () => {
  return (
    <div>
      <Hero />
      <Places />
      <Blog />
      <Find />
      <Book />
      <Footer />
    </div>
  )
}

export default Home;