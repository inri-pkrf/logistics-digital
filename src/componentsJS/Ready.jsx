import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import '../componentsCSS/Ready.css';

const Ready = () => {
  const navigate = useNavigate();

//   const goToCredits = () => {
//     console.log("Navigating to Credits");
//     navigate('/Credits'); 
//   };
  return (
    <div className="Ready-container">
         <div className='title-container-ready'>
         <img className='icon-title-ready' src={`${process.env.PUBLIC_URL}/assets/icons/refuaIcon.svg`}  />
      <h1 className='ready-title'>היערכות לחירום </h1>
      <div className='explenation-ready'>
        <p className='explanation-txt-ready'>בחלק זה בלומדה נלמד על היערכות לחירום . מה הציוד ביחידת המחסנים, ומה סבב הבדיקות שיש לעשות
        </p>
      </div>
      </div>
      <div onClick={()=>navigate("/Refua")} className='go-next-ready'>
        <p className='next-title'>הבא</p>
        <img className="next-arrow" src={`${process.env.PUBLIC_URL}/assets/imgs/next.svg`} />
      </div>
        </div>
  
 



  );
};

export default Ready;