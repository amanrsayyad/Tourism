import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Seprator from "../../Common/Seprator/Seprator";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Blog.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="blog">
        <div className="blog_center">
          <h2 className="blog_h2">
            Blog <Seprator />
          </h2>
        </div>
        <div className="blog_container">
          <div className="blog_card" data-aos="fade-down">
            <Link to="/Blogpage">
              <img
                src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt=""
              />
              <div className="blog_overlay">
                <h4>Which Beach To Choose?</h4>
              </div>
            </Link>
          </div>
          <div className="blog_card" data-aos="fade-down">
            <Link to="/Blogpage">
              <img
                src="https://images.unsplash.com/photo-1599739879563-1b6b666d4b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="blog_overlay">
                <h4>Kashmir the valley of heaven</h4>
              </div>
            </Link>
          </div>
          <div className="blog_card" data-aos="fade-down">
            <Link to="/Blogpage">
              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="blog_overlay">
                <h4>Delhi the capital</h4>
              </div>
            </Link>
          </div>
          <div className="blog_card" data-aos="fade-down">
            <Link to="/Blogpage">
              <img
                src="https://images.unsplash.com/photo-1625643058795-71a2eac353b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt=""
              />
              <div className="blog_overlay">
                <h4>Natures Pride Ratnagiri</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
