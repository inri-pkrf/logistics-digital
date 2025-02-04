import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import '../componentsCSS/Mivne.css';

const Mivne = () => {
  const navigate = useNavigate();

//   const goToCredits = () => {
//     console.log("Navigating to Credits");
//     navigate('/Credits'); 
//   };
  return (
    <div className="Mivne-container">
      <h1 className='title'>מבנה ייעוד ותפקידים במפקדות </h1>
      <div className='explenation'>
        <p className='explanation-txt'>בחלק זה בלומדה נלמד על מבנה, ייעוד ותפקידי הלוגיסטיקה במפקדות בשלב הראשון נדרש לבחור מפקדה(מחוז,נפה,גדוד) ולאחר מכן להרחיב את הלמידה על המכלולים והתאים השונים</p>
      </div>
        </div>
  
 



  );
};

export default Mivne;