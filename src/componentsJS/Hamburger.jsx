import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useVisitedPages } from '../hooks/useVisitedPages ';
import '../componentsCSS/Hamburger.css';

const Hamburger = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { visitedPages, markVisited } = useVisitedPages();
  const [isOpen, setIsOpen] = useState(false);

  const subjects = [
    { name: 'עמוד הבית', path: '/menu' },
    { name: 'מבנה ייעוד ותפקידים', path: '/mivne' },
    { name: 'היערכות לחירום', path: '/ready' },
    { name: 'נוהל גיוס לחירום', path: '/emergency' },
    { name: 'ניהול לחימה', path: '/war' },
    { name: 'מבחן', path: '/test' },
  ];

  // ✅ סמן את העמוד הנוכחי כ-visited גם אם נכנסת אליו ישירות
  useEffect(() => {
    markVisited(location.pathname);
  }, [location.pathname]);

  const handleMenuClick = (path) => {
    setIsOpen(false);
    markVisited(path); // סימון בעת לחיצה
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  const allPagesVisited = ['/mivne', '/ready', '/emergency', '/war'].every(path => visitedPages[path]);

  return (
    <div>
      <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`} />
      </div>

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/imgs/whiteLogo.svg`}
          alt="Decorative"
          className="whiteLogoHam"
        />
        <h1 className="menu-title">עזר לוגיסטיקה</h1>
        <ul className="menu-list">
          {subjects.map((subject) => {
            const visited = visitedPages[subject.path];
            const locked = subject.path === '/test' && !allPagesVisited;
            return (
              <li
                key={subject.path}
                onClick={() => !locked && handleMenuClick(subject.path)}
                className={`menu-item ${isActive(subject.path) ? 'active' : ''} ${visited ? 'visited' : ''} ${locked ? 'locked' : ''}`}
              >
                {subject.name} {locked && '🔒'}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
