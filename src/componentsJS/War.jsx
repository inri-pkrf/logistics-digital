import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import '../componentsCSS/War.css';

const War = () => {
  const navigate = useNavigate();

//   const goToCredits = () => {
//     console.log("Navigating to Credits");
//     navigate('/Credits'); 
//   };
  return (
    <div className="War-container">
           <div className='title-container-war'>
           <img className='icon-title-war' src={`${process.env.PUBLIC_URL}/assets/icons/warIcon.svg`}  />
      <h1 className='war-title'> ניהול לחימה</h1>
      </div>
        </div>
  
 



  );
};

export default War;