// Emergency.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Emergency.css';
import { useVisitedPages } from '../hooks/useVisitedPages .js';

const Emergency = () => {
  const navigate = useNavigate();
  const { visitedPages, markVisited } = useVisitedPages();

  const handleNavigation = (page) => {
    markVisited(page);
    navigate(`/${page}`);
  };

  return (
    <div className="Emergency-container">
      <div className='title-container-emergency'>
        <img className='icon-title-emergency' src={`${process.env.PUBLIC_URL}/assets/icons/emergencyIcon.svg`} />
        <h1 className='emergency-title'>נוהל גיוס לחירום</h1>

        <button 
          className={`emer-btn firstBtn ${visitedPages["/fast"] ? "btn-clicked" : ""}`} 
          onClick={() => handleNavigation("fast")}
        >
          עקרונות הגיוס המהיר
        </button>

        <button 
          className={`emer-btn seconedBtn ${visitedPages["/rounds"] ? "btn-clicked" : ""}`} 
          onClick={() => handleNavigation("rounds")}
        >
          סבבי העמסה
        </button>
        <button 
          className={`emer-btn thirdBtn ${visitedPages["/maml"] ? "btn-clicked" : ""}`} 
          onClick={() => handleNavigation("maml")}
        >
          עקרונות המעמ"ל
        </button>
      </div>
      <div className='navigation-btn'>
                    <div onClick={() => navigate("/menu")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrow.png`} />
                    </div>
                    <div onClick={() => navigate("/backdoor")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrow.png`} />
                    </div>
                </div>
    </div>
  );
};

export default Emergency;
