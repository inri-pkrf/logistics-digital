import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import './Styles/Ready.css';

const Ready = () => {
  const navigate = useNavigate();

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
    <div className="Ready-container">
         <div className='title-container-ready'>
          <p className='Ready-instructions'>לחצו על הנושאים על מנת ללמוד</p>
         <img className='icon-title-ready' src={`${process.env.PUBLIC_URL}/assets/icons/refuaIcon.svg`}  />
      <h1 className='ready-title'>היערכות לחירום </h1>
      <p className='KOH'>כו"כ</p>
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
<div className='navigation-btn'>
                    <div onClick={() => navigate("/menu")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrow.png`} />
                    </div>
                    <div onClick={() => navigate("/emergency")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrow.png`} />
                    </div>
                </div>

      </div>
    
        </div>
  
 



  );
};

export default Ready;