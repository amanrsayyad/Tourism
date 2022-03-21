import React, {useEffect}  from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './Images.css';

const Images = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);
 
  return (
    <div className="team_bg">
    <div className="team" >
         <div className="c">
             <div className="team__text animate-team">
                 <p className="topline">Gallery</p>
                 <h1>Our Memories</h1>
                 <p className="team__desc">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat delectus aperiam, similique quia laudantium.
                 </p>
             </div>
             <div className="team__text animate-team'">
                 <h1>Travel With Tourism</h1>
                 <p className="team__desc">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet in illo culpa adipisci officia vitae.
                 </p>
             </div>
             <div className="team__card animate-team'">
                 <img src="https://images.unsplash.com/photo-1610361418971-50cb8d1f8339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="person" className="team__img" data-aos="fade-down"/> 
             </div>
             <div className="team__card animate-team'">
                 <img src="https://images.unsplash.com/photo-1615445969492-6894df4a5613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="person" className="team__img" data-aos="fade-down"/> 
             </div>
             <div className="team__card animate-team'">
                 <img src="https://images.unsplash.com/photo-1578732805478-1e668c7df554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="person" className="team__img" data-aos="fade-down"/> 
             </div>
             <div className="team__card animate-team'">
                 <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80" alt="person" className="team__img" data-aos="fade-down"/> 
             </div>
         </div>
     </div>
     </div>
  )
}

export default Images;