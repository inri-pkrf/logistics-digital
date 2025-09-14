import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Styles/War.css';

const War = () => {
  const navigate = useNavigate();

  const [visitedPages, setVisitedPages] = useState(() => {
    return JSON.parse(sessionStorage.getItem("visitedPages")) || {};
  });

  // עדכון הסטייט לאחר ניווט
  useEffect(() => {
    // אם יש עדכון ב-visitedPages, נשמור אותו ב-sessionStorage
    sessionStorage.setItem("visitedPages", JSON.stringify(visitedPages));
  }, [visitedPages]);

  // עדכון הסטייט של עמוד שביקרנו בו
  const handleNavigation = (page) => {
    setVisitedPages(prev => ({ ...prev, [page]: true }));
    navigate(`/${page}`);
  };

  return (
    <div className="War-container">
      <div className='title-container-war'>
        <img className='icon-title-war' src={`${process.env.PUBLIC_URL}/assets/icons/warIcon.svg`}  />
        <h1 className='war-title'> ניהול לחימה</h1>
        
        <button 
          className={`war-btn btnWar-first ${visitedPages["backdoor"] ? "war-clicked" : ""}`} 
          onClick={() => handleNavigation("backdoor")}
        >
          החצר האחורית
        </button>

        <button 
          className={`war-btn btnWar-seconed ${visitedPages["hapakMichlala"] ? "war-clicked" : ""}`} 
          onClick={() => handleNavigation("hapakMichlala")}
        >
          חפ"ק מנהלה
        </button>

        <button 
          className={`war-btn btnWar-third ${visitedPages["validation"] ? "war-clicked" : ""}`} 
          onClick={() => handleNavigation("validation")}
        >
          הערכת מצב
        </button>
      </div>
    </div>
  );
};

export default War;
