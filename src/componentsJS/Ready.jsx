import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import '../componentsCSS/Ready.css';

const Ready = () => {
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
    <div className="Ready-container">
         <div className='title-container-ready'>
         <img className='icon-title-ready' src={`${process.env.PUBLIC_URL}/assets/icons/refuaIcon.svg`}  />
      <h1 className='ready-title'>היערכות לחירום </h1>
     
      <button 
          className={`ready-btn btnready-first ${visitedPages["Refua"] ? "ready-clicked" : ""}`} 
          onClick={() => handleNavigation("Refua")}
        >
        אמצעים
        </button>

        <button 
          className={`ready-btn btnready-seconed ${visitedPages["trainig"] ? "ready-clicked" : ""}`} 
          onClick={() => handleNavigation("training")}
        >
          אימונים
        </button>

        <button 
          className={`ready-btn btnready-third ${visitedPages["people"] ? "ready-clicked" : ""}`} 
          onClick={() => handleNavigation("people")}
        >
          הערכת מצב
        </button>
      </div>
    
        </div>
  
 



  );
};

export default Ready;