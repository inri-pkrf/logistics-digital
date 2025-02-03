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
      <h1 className='ready-title'>היערכות לחירום </h1>
        </div>
  
 



  );
};

export default Ready;