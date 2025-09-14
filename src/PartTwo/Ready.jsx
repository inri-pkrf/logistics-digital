import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import './Styles/Ready.css';

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
     <div className="venn-container">
  <button 
  className={`venn-circle circle-a ${visitedPages["Refua"] ? "clicked" : ""}`} 
  onClick={() => handleNavigation("Refua")}
>
  <p>אמצעים</p>
</button>

<button 
  className={`venn-circle circle-b ${visitedPages["training"] ? "clicked" : ""}`} 
  onClick={() => handleNavigation("training")}
>
  <p>אימונים</p>
</button>

<button 
  className={`venn-circle circle-c ${visitedPages["people"] ? "clicked" : ""}`} 
  onClick={() => handleNavigation("people")}
>
  <p>ניהול כוח אדם</p>
</button>

</div>

      </div>
    
        </div>
  
 



  );
};

export default Ready;