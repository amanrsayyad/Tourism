import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Seprator from '../../Common/Seprator/Seprator';
import Aos from "aos";
import "aos/dist/aos.css";
import './About.css';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);

  return (
    <div className='about'>
        <div className='center_about'>
           <h2 className='about_h2'>About <Seprator /></h2>    
        </div>
        <div className="about_container">
            <div className="about_card" data-aos="fade-right">
                <img src="https://images.unsplash.com/photo-1597754865557-96ea6b53c9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /> 
            </div>
            <div className="about_card" data-aos="fade-left">
                <h2>Lorem ipsum dolor sit amet.</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem minima autem consequuntur accusantium laudantium mollitia impedit debitis esse, pariatur ipsam perspiciatis odio commodi! Eaque nobis laboriosam molestias omnis dicta.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem minima autem consequuntur accusantium laudantium mollitia impedit debitis esse, pariatur ipsam perspiciatis odio commodi! Eaque nobis laboriosam molestias omnis dicta.</p>

                <div className='about_link'>
                    <Link to="/">Read More <i class="fa-solid fa-arrow-right-long"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;