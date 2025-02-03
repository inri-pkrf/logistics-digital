import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import '../componentsCSS/Menu.css';

const Menu = () => {
  const navigate = useNavigate();

//   const goToCredits = () => {
//     console.log("Navigating to Credits");
//     navigate('/Credits'); 
//   };
  return (
    <div className="Menu-container">
      <h1 className='home-title'>  עזר דיגיטלי בתחום <br></br>
        הלוגיסטיקה במפקדות</h1>
      
        <div className="buttons-container">
          <div onClick={()=>(navigate("/mivne"))} className='button-design mivne-button'>
            <div className="icon-container">
            <img
            src={`${process.env.PUBLIC_URL}/assets/icons/mivneIcon.svg`}
            className="menu-icon"
       
          />
            </div>
            <p className="btn-title">מבנה ייעוד ותפקידים
            </p>
          </div>
          <div onClick={()=>(navigate("/ready"))} className='button-design refua-button'>
            <div className="icon-container">
            <img
            src={`${process.env.PUBLIC_URL}/assets/icons/refuaIcon.svg`}
            className="menu-icon"
       
          />
            </div>
            <p className="btn-title">היערות לחירום
            </p>
          </div>
          <div onClick={()=>(navigate("/emergency"))} className='button-design emergency-button'>
            <div className="icon-container">
            <img
            src={`${process.env.PUBLIC_URL}/assets/icons/emergencyIcon.svg`}
            className="menu-icon"
       
          />
            </div>
            <p className="btn-title"> נוהל גיוס לחירום
            </p>
          </div>
          <div onClick={()=>(navigate("/war"))} className='button-design war-button'>
            <div className="icon-container">
            <img
            src={`${process.env.PUBLIC_URL}/assets/icons/warIcon.svg`}
            className="menu-icon"
       
          />
            </div>
            <p className="btn-title">ניהול לחימה  
            </p>
          </div>
         
    </div>
        </div>
  
 



  );
};

export default Menu;