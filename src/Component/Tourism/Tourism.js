import React from "react";
import './Tourism.css';

const Tourism = () => {
  return (
    <div>
    <div className="tourism">
      <div className="tourism_overlay">
        <img src="https://images.unsplash.com/photo-1587633391288-fab813ef755b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        <div className="travel_head">
          <h3>Get An Unforgetabel</h3>
          <h3 className="travel_h3">Vacation In Traveling</h3>
          <div className="underline_travel"></div>
        </div>
        <ul className="travel_social">
          <li className="travel_icon">///////</li>
          <li className="travel_icon"><i class="fa-brands fa-instagram"></i></li>
          <li className="travel_icon"><i class="fa-brands fa-facebook"></i></li>
          <li className="travel_icon"><i class="fa-brands fa-youtube"></i></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Tourism;
