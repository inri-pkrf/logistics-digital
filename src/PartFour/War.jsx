import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Styles/War.css';
import { useVisitedPages } from '../hooks/useVisitedPages .js'; // ודא שאין רווח מיותר בשם הקובץ

const War = () => {
  const navigate = useNavigate();
  const { visitedPages, markVisited } = useVisitedPages();

  const handleNavigation = (page) => {
    markVisited(page);       // מסמן את העמוד כ-visited
    navigate(`/${page}`);    // מבצע ניווט
  };

  return (
    <div className="War-container">
      <div className='title-container-war'>
        <img className='icon-title-war' src={`${process.env.PUBLIC_URL}/assets/icons/warIcon.svg`}  />
        <h1 className='war-title'>ניהול לחימה</h1>
        
        <button 
          className={`war-btn btnWar-first ${visitedPages["/backdoor"] ? "war-clicked" : ""}`} 
          onClick={() => handleNavigation("backdoor")}
        >
          החצר האחורית
        </button>

        <button 
          className={`war-btn btnWar-seconed ${visitedPages["/hapakMichlala"] ? "war-clicked" : ""}`} 
          onClick={() => handleNavigation("hapakMichlala")}
        >
          חפ"ק מנהלה
        </button>

        <button 
          className={`war-btn btnWar-third ${visitedPages["/fields"] ? "war-clicked" : ""}`} 
          onClick={() => handleNavigation("fields")}
        >
          שטחי שהייה
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

export default War;
