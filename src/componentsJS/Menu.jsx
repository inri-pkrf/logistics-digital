import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useVisitedPages } from '../hooks/useVisitedPages ';
import '../componentsCSS/Menu.css';

const Menu = ({ setAllowLandscape }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { visitedPages, markVisited } = useVisitedPages();

  const [isVideoZoomed, setIsVideoZoomed] = useState(false); // מצב הגדלת וידאו

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

  // פונקציה לטיפול בלחיצה על הוידאו
  const handleVideoClick = () => {
    const newZoomState = !isVideoZoomed;
    setIsVideoZoomed(newZoomState);
    if (setAllowLandscape) setAllowLandscape(newZoomState); // מאפשר אופקי רק כשמגדילים
  };

  return (
    <div className="Menu-container">
      <h1 className='menu-main-title'>עזר דיגיטלי בתחום <br /> הלוגיסטיקה במפקדות</h1>
      <div className="buttons-container">
        {pages.map(renderPageButton)}
        {renderPageButton(quizPage)}
      </div>

      <h2 className='minititle'>לוגיסטיקה בחרבות ברזל</h2>
<iframe
  src="https://www.youtube.com/embed/fmyaWMgItr0"
  className={`video-menu ${isVideoZoomed ? 'zoomed' : ''}`}
  allow="autoplay; fullscreen"
  frameBorder="0"
  allowFullScreen
  title="Video Player"
  onClick={handleVideoClick}
></iframe>



    </div>
  );
};

export default Menu;
