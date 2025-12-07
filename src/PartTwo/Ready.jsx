import React , {useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useVisitedPages } from '../hooks/useVisitedPages .js';

import './Styles/Ready.css';

const Ready = () => {
  const { visitedPages, markVisited } = useVisitedPages();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // סימון אוטומטי של העמוד הנוכחי
    markVisited(location.pathname);
  }, [location.pathname]);

  return (
    <div className="Ready-container">
         <div className='title-container-ready'>
          <p className='Ready-instructions'>לחצו על הנושאים על מנת ללמוד</p>
         <img className='icon-title-ready' src={`${process.env.PUBLIC_URL}/assets/icons/refuaIcon.svg`}  />
      <h1 className='ready-title'>היערכות לחירום </h1>
      <p className='KOH'>כו"כ</p>
     <div className="venn-container">
<div 
  className={`venn-circle circle-a ${visitedPages["/Methods"] ? "clicked" : ""}`} 
  onClick={() => navigate("/Methods")}
>
  <p>אמצעים</p>
</div >

<div  
  className={`venn-circle circle-b ${visitedPages["/training"] ? "clicked" : ""}`} 
  onClick={() => navigate("/training")}
>
  <p>אימונים</p>
</div >

<div  
  className={`venn-circle circle-c ${visitedPages["/people"] ? "clicked" : ""}`} 
  onClick={() => navigate("/people")}
>
  <p>ניהול כוח אדם</p>
</div >

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