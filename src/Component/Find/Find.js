import React, {useEffect} from 'react';
import Slash from '../../Common/Slash/Slash';
import Aos from "aos";
import "aos/dist/aos.css";
import './find.css';

const Find = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
 
    return (
        <div className='find'>
            <div className="find_container">
                <div className="find_card img1" data-aos="flip-left">
                    <Slash />
                    <h3>Find Your Places</h3>
                    <p>Browse all loading listing</p>
                </div>
                <div className="find_card img2" data-aos="flip-left">
                    <Slash />
                    <h3>Activities</h3>
                    <p>Explore the Tourism Activities</p>
                </div>
                <div className="find_card img3" data-aos="flip-left">
                    <Slash />
                    <h3>Plan Your Visit</h3>
                    <p>Everything you need to know</p>
                </div>
            </div>
        </div>
    )
}

export default Find;