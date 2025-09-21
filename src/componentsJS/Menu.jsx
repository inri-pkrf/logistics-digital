import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../componentsCSS/Menu.css';

const Menu = () => {
  const navigate = useNavigate();

  const pages = [
    { name: "mivne", icon: "mivneIcon.svg", className: "mivne-button" },
    { name: "ready", icon: "refuaIcon.svg", className: "refua-button" },
    { name: "emergency", icon: "emergencyIcon.svg", className: "emergency-button" },
    { name: "war", icon: "warIcon.svg", className: "war-button" }
  ];

  // כפתור המבחן
  const quizPage = { name: "quiz", icon: "quiz.svg", className: "quiz-button", title: "מבחן", path: "/test" };

  const [visitedPages, setVisitedPages] = useState(() => {
    return JSON.parse(sessionStorage.getItem("visitedPages")) || {};
  });

  useEffect(() => {
    sessionStorage.setItem("visitedPages", JSON.stringify(visitedPages));
  }, [visitedPages]);

  // בודקים אם כל ארבעת העמודים הראשיים ביקרו בהם
  const allPagesVisited = pages.every(page => visitedPages[`/${page.name}`]);

  const handleNavigation = (page) => {
    if (page.name === "quiz" && !allPagesVisited) return; // נעול אם לא ביקרו בכל העמודים
    setVisitedPages(prev => ({ ...prev, [page.path || `/${page.name}`]: true }));
    navigate(page.path || `/${page.name}`);
  };

  const renderPageButton = (page) => {
    const path = page.path || `/${page.name}`;
    const isVisited = visitedPages[path];
    const iconPath = isVisited 
      ? `${process.env.PUBLIC_URL}/assets/blueIcons/${page.icon.replace('.svg', 'Blue.svg')}` 
      : `${process.env.PUBLIC_URL}/assets/icons/${page.icon}`;

    return (
      <div 
        key={page.name} 
        onClick={() => handleNavigation(page)} 
        className={`button-design ${page.className} ${page.name === "quiz" && !allPagesVisited ? 'locked' : ''}`}
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
    </div>
  );
};

export default Menu;
