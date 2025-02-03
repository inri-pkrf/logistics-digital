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
      <h1 className='emergency-title'>נוהל גיוס לחירום</h1>
        </div>
  
 



  );
};

export default Emergency;