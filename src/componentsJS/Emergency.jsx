import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import '../componentsCSS/Emergency.css';

const Emergency = () => {
  const navigate = useNavigate();

//   const goToCredits = () => {
//     console.log("Navigating to Credits");
//     navigate('/Credits'); 
//   };
  return (
    <div className="Emergency-container">
         <div className='title-container-emergency'>
         <img className='icon-title-emergency' src={`${process.env.PUBLIC_URL}/assets/icons/emergencyIcon.svg`}  />
      <h1 className='emergency-title'>נוהל גיוס לחירום</h1>
      </div>
        </div>
  
 



  );
};

export default Emergency;