import React from 'react';
import './MainTour.css';
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const MainTour = () => {
    return (
        <div>
            <div className='main_bg'></div>
            <div className='main_tour'>
                <div className="main_container">
                    <div className="main_card">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 room_img"
                                    src="https://images.unsplash.com/photo-1593681645570-83083d750183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                                    alt=""
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 room_img"
                                    src="https://images.unsplash.com/photo-1631867675167-90a456a90863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
                                    alt=""
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 room_img"
                                    src="https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80"
                                    alt=""
                                />
                            </Carousel.Item>

                        </Carousel>
                    </div>
                    <div className="main_card">
                        <h3>Rajhsthan City Of Desert</h3>
                        <ul className="star_main">
                            <li className="star_list">
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li className="star_list">
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li className="star_list">
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li className="star_list">
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li className="star_list">
                                <i class="fa-solid fa-star"></i>
                            </li>
                        </ul>
                        <div className="tour_div">
                            <div className='tour_one'>
                                <div className="plan_tour">
                                    <i class="fa-solid fa-earth-africa"></i>
                                </div>
                                <ul className="tour_ul">
                                    <li className="tour_li"><i class="fa-solid fa-calendar-check"></i>Departure Date</li>
                                    <li className="tour_li">22.04.2022 . <span>for 7 nights</span></li>
                                </ul>
                                <ul className="tour_ul">
                                    <li className="tour_li"><i class="fa-solid fa-plane-departure"></i>Departure Date</li>
                                    <li className="tour_li"> <span>Flight From Pune</span></li>
                                </ul>
                                <ul className="tour_ul">
                                    <li className="tour_li"><i class="fa-solid fa-taxi"></i>Executions</li>
                                    <li className="tour_li"> <span>Price - $ 7</span></li>
                                </ul>
                                <div className="tour_price">
                                    $ 1500
                                    <span>/day</span>
                                </div>
                            </div>
                            <div className='tour_two'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308812.555725523!2d69.37949550961734!3d26.560101220787622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1647845621106!5m2!1sen!2sin" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
                                 <ul className="features_tour">
                                     <h4><i class="fa-solid fa-calendar-check"></i>Included</h4>
                                     <li className="features_li">Insuarance</li>
                                     <li className="features_li">Transfer</li>
                                     <li className="features_li">Lunch on a plane</li>
                                     <li className="features_li">Safety</li>
                                 </ul>
                                 <div className="book_tour">
                                     Book Now
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTour