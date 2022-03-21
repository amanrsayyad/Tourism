import React, {useEffect} from 'react';
import Seprator from '../../Common/Seprator/Seprator';
import './Places.css';
import { PlacesData } from '../../Data/Data';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Places = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <div className='places'>
            <div className="center_places">
               <div className="places_h2">Tourism <Seprator /></div>    
            </div>
            <div className="places_container">
                {PlacesData.map((item) => (
                    <div className="places_card" data-aos="flip-up">
                        <img src={item.img} alt="" />
                        <div className='places_overlay'>
                            <div className='places_flex'>
                                <div className='place_content'>
                                    <h3>{item.heading}</h3>
                                    <p>{item.price}</p>
                                </div>
                                <div className='place_content'>
                                    <p>{item.rating}</p>
                                    <Link to="/MainTour" className="btn_places">{item.btn}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Places;