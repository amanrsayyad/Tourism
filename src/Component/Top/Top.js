import React from 'react';
import Seprator from '../../Common/Seprator/Seprator';
import './Top.css';

const Top = () => {
    return (
        <div className='top'>
            <div className="top_center">
                <h2 className='top_h2'>Top Tour  <Seprator /></h2>
            </div>
            <div className="top_container">
                 <div className="top_card">
                    <div className="top_price"><h5>$ 400</h5></div>
                   <img src="https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg" alt="" />
                   <div className='top_overlay'><h4>7 days Course in Tamilnadu</h4></div>
                 </div>
                 <div className="top_card">
                 <div className="top_price"><h5>$ 800</h5></div>
                   <img src="https://images.unsplash.com/photo-1584732200355-486a95263014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                   <div className='top_overlay'><h4>7 days Course in Kashmir</h4></div>
                 </div>
                 <div className="top_card">
                 <div className="top_price"><h5>$ 600</h5></div>
                   <img src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                   <div className='top_overlay'><h4>7 days Course in Rajasthan</h4></div>
                 </div>
                 <div className="top_card">
                 <div className="top_price"><h5>$ 450</h5></div>
                   <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                   <div className='top_overlay'><h4>7 days Course in Rajasthan</h4></div>
                 </div>
                 <div className="top_card">
                 <div className="top_price"><h5>$ 550</h5></div>
                   <img src="https://images.unsplash.com/photo-1620902459224-c4bb00278144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                   <div className='top_overlay'><h4>7 days Course in Rajasthan</h4></div>
                 </div>
            </div>
        </div>
    )
}

export default Top