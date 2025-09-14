import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import './Styles/Mivne.css';

const Mivne = () => {
  const navigate = useNavigate();

//   const goToCredits = () => {
//     console.log("Navigating to Credits");
//     navigate('/Credits'); 
//   };
  return (
    <div className="Mivne-container">
      <div className='title-container'>
        <img className='icon-title-mivne' src={`${process.env.PUBLIC_URL}/assets/icons/mivneIcon.svg`}  />
      <h1 className='title'>מבנה ייעוד ותפקידים במפקדות </h1>

      </div>
      <div className='explenation'>
        <p className='explanation-txt'>בחלק זה בלומדה נלמד על מבנה, ייעוד ותפקידי הלוגיסטיקה במפקדות בשלב הראשון נדרש לבחור מפקדה(מחוז,נפה,גדוד) ולאחר מכן להרחיב את הלמידה על המכלולים והתאים השונים</p>
      </div>
      <div onClick={()=>navigate("/diagram")} className='go-next'>
        <p className='next-title'>הבא</p>
        <img className="next-arrow" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrow.png`} />
      </div>
        </div>
  
 



  );
};

export default Mivne;