import React from "react";
import "./Caro.css";
import Carousel from "react-bootstrap/Carousel";

const Caro = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="caro_up">
          <img className="d-block w-100 caro_img" src="https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
          <div className="caro_word">
            {/* <h2 className="caro_h2">Treasure Your Holiday</h2> */}
            {/* <p className="caro_p">Exeperience Paradise On Earth</p> */}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 caro_img" src="https://images.unsplash.com/photo-1627894485200-b92fb4353967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          <div className="caro_word">
            {/* <h2 className="caro_h2">To Infinity & Beyond</h2> */}
            {/* <p className="caro_p">Your Time To Escape</p> */}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 caro_img" src="https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />
          <div className="caro_word">
            {/* <h2 className="caro_h2">La Serene Resort & Spa</h2> */}
            {/* <p className="caro_p">Resort In The Valley's</p> */}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 caro_img" src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80" alt="" />
          <div className="caro_word">
            {/* <h2 className="caro_h2">We Serve Fresh & Delicious Food</h2> */}
            {/* <p className="caro_p food">Eat Away At Hunger</p> */}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 caro_img" src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80" alt="" />
          <div className="caro_word">
            {/* <h2 className="caro_h2">Add A Splash Of Luxury</h2> */}
            {/* <p className="caro_p">Experience The Best Life Can Offer</p> */}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caro;