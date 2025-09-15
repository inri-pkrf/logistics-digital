import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCSS/Hamburger.css';

const Hamburger = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ התחלה עם מערך בטוח
  const [visitedPages, setVisitedPages] = useState(() => {
    try {
      const storedPages = JSON.parse(sessionStorage.getItem('visitedPages'));
      return Array.isArray(storedPages) ? storedPages : [];
    } catch (e) {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  const subjects = [
    { name: 'עמוד הבית', path: '/menu' },
    { name: 'מבנה ייעוד ותפקידים', path: '/mivne' },
    { name: 'היערכות לחירום', path: '/ready' },
    { name: 'נוהל גיוס לחירום', path: '/emergency' },
    { name: 'ניהול לחימה', path: '/war' },
    { name: 'בוחן', path: '/simulation' },
  ];

  useEffect(() => {
    if (!visitedPages.includes(location.pathname)) {
      const updatedVisitedPages = [...visitedPages, location.pathname];
      setVisitedPages(updatedVisitedPages);
      sessionStorage.setItem('visitedPages', JSON.stringify(updatedVisitedPages));
    }
  }, [location.pathname, visitedPages]);

  const handleMenuClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

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
            const visited = Array.isArray(visitedPages) && visitedPages.includes(subject.path);
            return (
              <li
                key={subject.path}
                onClick={() => handleMenuClick(subject.path)}
                className={`menu-item ${isActive(subject.path) ? 'active' : ''} ${visited ? 'visited' : ''}`}
              >
                {subject.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
