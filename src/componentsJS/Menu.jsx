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
    <div className="Menu-container">
      <h1 className='home-title'>  עזר דיגיטלי בתחום <br></br> הלוגיסטיקה במפקדות</h1>
      <div className="buttons-container">
        {pages.map(({ name, icon, className }) => {
          const isVisited = visitedPages[name];
          const iconPath = isVisited 
            ? `${process.env.PUBLIC_URL}/assets/blueIcons/${icon.replace('.svg', 'Blue.svg')}` 
            : `${process.env.PUBLIC_URL}/assets/icons/${icon}`;
          
          return (
            <div key={name} onClick={() => handleNavigation(name)} className={`button-design ${className}`}>
              <div className={`icon-container ${isVisited ? 'pressed' : ''}`}>
                <img src={iconPath} className="menu-icon" alt={name} />
              </div>
              <p className={`btn-title ${isVisited ? 'title-pressed' : ''}`}>{name === "mivne" ? "מבנה ייעוד ותפקידים" : 
                                       name === "ready" ? "היערכות לחירום" : 
                                       name === "emergency" ? "נוהל גיוס לחירום" : 
                                       "ניהול לחימה"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
