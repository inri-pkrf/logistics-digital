import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Emergency.css';

const Emergency = () => {
  const navigate = useNavigate();

  // שמירה אם המשתמש היה ב /fast וב /rounds
  const [visitedPages, setVisitedPages] = useState(() => {
    return JSON.parse(sessionStorage.getItem("visitedPages")) || {};
  });

  useEffect(() => {
    sessionStorage.setItem("visitedPages", JSON.stringify(visitedPages));
  }, [visitedPages]);

  const handleNavigation = (page) => {
    setVisitedPages(prev => ({ ...prev, [page]: true }));
    navigate(`/${page}`);
  };

  return (
    <div className="Emergency-container">
      <div className='title-container-emergency'>
        <img className='icon-title-emergency' src={`${process.env.PUBLIC_URL}/assets/icons/emergencyIcon.svg`} />
        <h1 className='emergency-title'>נוהל גיוס לחירום</h1>

        <button 
          className={`emer-btn firstBtn ${visitedPages["fast"] ? "btn-clicked" : ""}`} 
          onClick={() => handleNavigation("fast")}
        >
          עקרונות הגיוס המהיר
        </button>

        <button 
          className={`emer-btn seconedBtn ${visitedPages["rounds"] ? "btn-clicked" : ""}`} 
          onClick={() => handleNavigation("rounds")}
        >
          סבבי העמסה
        </button>
        <button 
          className={`emer-btn thirdBtn ${visitedPages["maml"] ? "btn-clicked" : ""}`} 
          onClick={() => handleNavigation("maml")}
        >עקרונות המעמ"ל
        </button>
      </div>
    </div>
  );
};

export default Emergency;
