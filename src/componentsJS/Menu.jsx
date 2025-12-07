import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useVisitedPages } from '../hooks/useVisitedPages ';
import '../componentsCSS/Menu.css';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { visitedPages, markVisited } = useVisitedPages();

  const pages = [
    { name: "mivne", icon: "mivneIcon.svg", className: "mivne-button" },
    { name: "ready", icon: "refuaIcon.svg", className: "refua-button" },
    { name: "emergency", icon: "emergencyIcon.svg", className: "emergency-button" },
    { name: "war", icon: "warIcon.svg", className: "war-button" }
  ];

  const quizPage = { name: "quiz", icon: "quiz.svg", className: "quiz-button", title: "מבחן", path: "/test" };


  useEffect(() => {
    markVisited(location.pathname);
  }, [location.pathname]);

  const allPagesVisited = pages.every(page => visitedPages[`/${page.name}`]);

  const handleNavigation = (page) => {
    if (page.name === "quiz" && !allPagesVisited) return;
    markVisited(page.path || `/${page.name}`);
    navigate(page.path || `/${page.name}`);
  };

  const renderPageButton = (page) => {
    const path = page.path || `/${page.name}`;
    const isVisited = visitedPages[path];
    const lockedClass = page.name === "quiz" && !allPagesVisited ? 'locked' : '';

    const iconPath = isVisited 
      ? `${process.env.PUBLIC_URL}/assets/blueIcons/${page.icon.replace('.svg', 'Blue.svg')}` 
      : `${process.env.PUBLIC_URL}/assets/icons/${page.icon}`;

    return (
      <div 
        key={page.name} 
        onClick={() => handleNavigation(page)} 
        className={`button-design ${page.className} ${lockedClass}`}
      >
        <div className={`icon-container ${isVisited ? 'pressed' : ''}`}>
          <img src={iconPath} className="menu-icon" alt={page.name} />
        </div>
        <p className={`btn-title ${isVisited ? 'title-pressed' : ''}`}>
          {page.title || (page.name === "mivne" ? "מבנה ייעוד ותפקידים" : 
                          page.name === "ready" ? "היערכות לחירום" : 
                          page.name === "emergency" ? "נוהל גיוס לחירום" : 
                          "ניהול לחימה")}
        </p>
      </div>
    );
  };

  return (
    <div className="Menu-container">
      <h1 className='home-title'>עזר דיגיטלי בתחום <br /> הלוגיסטיקה במפקדות</h1>
      <div className="buttons-container">
        {pages.map(renderPageButton)}
        {renderPageButton(quizPage)}
      </div>
           <video className="video-menu" controls  playsInline>
                <source src={`${process.env.PUBLIC_URL}/assets/media/War.mp4`} type="video/mp4" />
                <track 
                default 
                kind="captions" 
                src={`${process.env.PUBLIC_URL}/assets/media/Validiation_subtitles_en.vtt`} 
                srclang="en" 
                label="English" 
                />
                Your browser does not support the video tag.
            </video>
    </div>
  );
};

export default Menu;
